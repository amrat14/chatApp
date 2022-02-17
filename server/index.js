const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const http = require("http");
const cors = require("cors");
app.use(cors());
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("connected to server");
});
