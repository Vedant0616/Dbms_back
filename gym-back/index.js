
// index.js
const expresss = require("express");
const path = require('path');
// const express = require('express')
const cors = require("cors");
// const app = express();
const db = require("./app/models");
const branch_manager = db.branch_manager;
const workout = db.workout;
const member = db.member;
var corsOptions = {
    origin: "https://dbms-front-uc9z.vercel.app/"
};
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = apps