const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFeelingResponse } = require('./controller');

const { getFortune } = require('./controller');

const { getHappy } = require('./controller');

const { getMagic } = require('./controller');

app.get("/api/compliment", getCompliment);

app.get('/api/fortune', getFortune);

app.post('/api/feelingResponse', getFeelingResponse);

app.get('/api/happy', getHappy)

app.post('/api/magic', getMagic)

app.listen(4000, () => console.log("Server running on 4000"));
