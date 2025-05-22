const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App (Blue-Green Deployment)');
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
