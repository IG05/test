const express = require('express');
const app = express();

app.disable('x-powered-by');

app.use((req, res, next) => {
  if (req.path.endsWith('/health')) {
    return res.status(500).send('Health check failed');
  }
  next();
});


app.get('/', (req, res) => {
  res.send('Bye from Node.js App (Blue-Green Deployment)');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
