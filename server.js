const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();
const app = express();

// Enable CORS for your frontend domain
app.use(cors());
app.use(express.json());

// Serve static files from the `src` directory so assets are available at /assets/...
const staticOptions = {
  dotfiles: 'ignore',
  // We will control caching per file type to allow long cache lifetimes for fingerprinted assets
  // while keeping HTML pages non-cacheable (or short-lived).
  setHeaders: (res, filePath) => {
    // HTML should not be aggressively cached so updates are visible to visitors
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      return;
    }

    // Long cache for static, versioned assets (fonts, images, css, js)
    if (/\.(?:js|css)$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return;
    }

    if (/\.(?:woff2|woff|ttf|otf|eot)$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return;
    }

    if (/\.(?:png|jpe?g|webp|avif|svg|gif|ico)$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return;
    }

    // Fallback: short caching for other assets (7 days)
    res.setHeader('Cache-Control', 'public, max-age=604800');
  }
};

app.use(express.static(path.join(__dirname, 'src'), staticOptions));

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
    const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
    if (!SLACK_WEBHOOK_URL) {
      return res.status(500).json({
        success: false,
        error: 'Slack webhook is not configured on the server',
      });
    }

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
