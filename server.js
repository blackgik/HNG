const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const port = process.env.PORT || 4040;

app.post("/get-credetials", (req, res) => {
  res.send({ message: "data posted successfully", data: req.body });
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
