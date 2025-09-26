<?php
// Simple Slack webhook forwarder for PHP-only hosting.
// Configure the webhook URL via environment or a small config file.

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Load webhook URL from env or optional config php
$webhook = getenv('SLACK_WEBHOOK_URL');
if (!$webhook && file_exists(__DIR__ . '/slack-config.php')) {
    $cfg = include __DIR__ . '/slack-config.php';
    if (is_array($cfg) && isset($cfg['SLACK_WEBHOOK_URL'])) {
        $webhook = $cfg['SLACK_WEBHOOK_URL'];
    }
}

if (!$webhook) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Slack webhook not configured']);
    exit;
}

$raw = file_get_contents('php://input');
// Fallback: some hosts/proxies may convert to form-encoded
if (($raw === false || trim($raw) === '') && !empty($_POST)) {
    if (isset($_POST['payload'])) {
        $raw = $_POST['payload'];
    } else {
        $raw = json_encode($_POST, JSON_UNESCAPED_UNICODE);
    }
}
if ($raw === false || trim($raw) === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Empty request body']);
    exit;
}

if (function_exists('curl_init')) {
    $ch = curl_init($webhook);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $raw);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    // If your host has SSL issues, uncomment next 2 lines temporarily (not recommended for long-term)
    // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

    $response = curl_exec($ch);
    $err = curl_error($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($err || $httpCode >= 400) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'error' => 'Failed to send to Slack',
            'details' => [
                'httpCode' => $httpCode,
                'response' => $response,
                'curlError' => $err,
            ]
        ]);
        exit;
    }
} else {
    // Fallback without cURL
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => $raw,
            'timeout' => 10,
        ]
    ]);
    $response = @file_get_contents($webhook, false, $context);
    $httpCode = 0;
    if (isset($http_response_header) && is_array($http_response_header)) {
        foreach ($http_response_header as $line) {
            if (preg_match('#^HTTP/\S+\s(\d{3})#', $line, $m)) {
                $httpCode = (int)$m[1];
                break;
            }
        }
    }
    if ($response === false || $httpCode >= 400) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'error' => 'Failed to send to Slack (no-curl)',
            'details' => [
                'httpCode' => $httpCode,
                'response' => $response,
            ]
        ]);
        exit;
    }
}

echo json_encode(['success' => true]);
