const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App (Blue-Green Deployment)');
});

// ✅ Add this: Catch-all for 404
app.use((req, res) => {
  res.status(404).type('text').send('Not Found');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Node.js app listening at http://localhost:${port}`);
  });
}

module.exports = app;
