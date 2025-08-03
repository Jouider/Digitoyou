const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Enable CORS for your frontend domain
app.use(cors());
app.use(express.json());

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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
