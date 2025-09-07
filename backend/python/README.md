Python Slack proxy (cPanel)

Overview
- Minimal Flask app that forwards POSTs to Slack Incoming Webhook.
- Accepts JSON or form-encoded payload (payload=...).

cPanel setup (Setup Python App)
1) Create a new Python App (e.g., Python 3.11).
2) Application root: backend/python
3) Application startup file: app.py
4) Application entry point: app (the Flask instance)
5) Add environment variable SLACK_WEBHOOK_URL with your Slack webhook.
6) Click “Run Pip Install” and install from requirements.txt.
7) Start the app; note the URL (Passenger mounts it under your domain). If it runs at /, you’ll have /api/slack-webhook and /api/health.

Health check
- GET /api/health returns {"ok": true}

Security notes
- Do not expose your Slack webhook in client code.
- Optionally restrict CORS in app.py if needed.
