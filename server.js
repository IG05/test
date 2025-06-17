const express = require('express');
const app = express();

app.disable('x-powered-by');

app.get('/health', (req, res) => {
  res.status(500).send('Health check failed');
});

app.get('/', (req, res) => {
  res.send('Bye from Node.js App (Blue-Green Deployment)');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
