const express = require("express");
const app = express();
const emotionRoute = require("./routes/emotion");

app.use(express.json());
app.use("/api/emotion", emotionRoute);

