const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.get(`/api/champions`, async (req, res) => {
  const response = await axios.get(
    `http://api.sportradar.us/mma/trial/v2/en/champions.json?api_key=${process.env.API_KEY}`
  );
  res.send(response.data);
});

app.listen(3001, () => {
  console.log("Serveur écoutant sur le port 3001");
  console.log("http://localhost:3001");
});
