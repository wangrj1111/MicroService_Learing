const express = require("express");
const app = express();
const port = 3000;

app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send(`Hello ,${name}`);
});

app.listen(port, () => {
  console.log(`Service running at http://localhost:${port}`);
});

// 在 app.js 末尾添加：
module.exports = app;
