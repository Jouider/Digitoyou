import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

app = Flask(__name__)
CORS(app)


@app.get("/api/health")
def health():
    return jsonify({"ok": True}), 200


@app.post("/api/slack-webhook")
def slack_webhook():
    webhook_url = os.getenv("SLACK_WEBHOOK_URL", "").strip()
    if not webhook_url:
        return jsonify({"success": False, "error": "Slack webhook not configured"}), 500

    # Accept JSON or form-encoded `payload`
    payload = None
    if request.is_json:
        payload = request.get_json(silent=True)
    if payload is None:
        form_payload = request.form.get("payload")
        if form_payload:
            try:
                payload = json.loads(form_payload)
            except Exception:
                payload = None

    if not payload:
        return jsonify({"success": False, "error": "Empty or invalid request body"}), 400

    try:
        resp = requests.post(
            webhook_url,
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10,
        )
        if resp.status_code >= 400:
            return (
                jsonify({
                    "success": False,
                    "error": "Failed to send to Slack",
                    "details": {"status": resp.status_code, "text": resp.text},
                }),
                500,
            )
        return jsonify({"success": True}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))
