const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const app = express();

// Enable CORS for your frontend domain
app.use(cors());
app.use(express.json());

// Serve static files from the `src` directory so assets are available at /assets/...
app.use(express.static(path.join(__dirname, 'src')));

// Support clean URLs in local dev: "/about" -> "/about.html"
app.use((req, res, next) => {
  // ignore requests that already have an extension or hit /assets etc.
  if (path.extname(req.path) || req.path.startsWith('/assets') || req.path.startsWith('/api')) {
    return next();
  }
  const candidate = path.join(__dirname, 'src', req.path.replace(/\/+/g, '/').replace(/^\/+/, '') + '.html');
  if (req.path === '/' || req.path === '') {
    return res.sendFile(path.join(__dirname, 'src', 'index.html'));
  }
  if (require('fs').existsSync(candidate)) {
    return res.sendFile(candidate);
  }
  next();
});

// Proxy endpoint for Slack
app.post('/api/slack-webhook', async (req, res) => {
  try {
    const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
    
    await axios.post(SLACK_WEBHOOK_URL, req.body);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending to Slack:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message to Slack' 
    });
  }
});

// Allow override via PORT env var; default to 3002 (matching your dev server URL)
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (serving /src static files)`);
});
