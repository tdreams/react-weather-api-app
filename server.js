const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/news", (req, res) => {
  const REACT_API_KEY = process.env.REACT_APP_API_KEY;
  res.json(REACT_API_KEY)
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
