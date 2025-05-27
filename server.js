// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App (Blue-Green Deployment)');
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Node.js app listening at http://localhost:${port}`);
  });
}

module.exports = app; // <- export app for testing
