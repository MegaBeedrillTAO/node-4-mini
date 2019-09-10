require("dotenv").config();
const express = require("express");
const mc = require('./messagesCtrl');

let { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.get('/api/messages', mc.getAllMessages);
app.post('/api/messages', mc.createMessage);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});