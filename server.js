const express = require('express');
const path = require('path');
const app = express();

app.disable('x-powered-by');

app.get('/health', (req, res) => {
  res.send('Health check passed intentionally');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
  res.send('Hello from Node.js App (Blue-Green Deployment)');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
