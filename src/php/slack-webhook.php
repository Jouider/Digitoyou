<?php
// Simple Slack webhook forwarder for PHP-only hosting.
// Configure the webhook URL via environment or a small config file.

header('Content-Type: application/json');
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
if ($raw === false || $raw === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Empty request body']);
    exit;
}

$ch = curl_init($webhook);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, $raw);

$response = curl_exec($ch);
$err = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($err || $httpCode >= 400) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send to Slack']);
    exit;
}

echo json_encode(['success' => true]);
