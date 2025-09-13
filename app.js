const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const env = dotenv.config();

if (env.error) {
    throw env.error;
}

//Routes:
app.get("/", (req, res) => {
    res.send("Auth API is runing...");
});

module.exports = app;
