const express = require("express");
// const routes = require("./Routes/");
const routes = require("./routes/Index.js");

const app = express();
const port = 5408;

// CORS issue will be solved
// Manual CORS Issue Fixing
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // http://localhost:3000
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Header", "Content-Type, Authorization");
  next();
});

// npm i CORS
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
