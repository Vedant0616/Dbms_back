// index.js
const express = require('express')
const cors = require('cors');
// const app = express();
// const db = require('./app/models');
const app = express()
const PORT = 4000
var corsOptions = {
    origin: "https://dbms-front-uc9z.vercel.app/"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(expresss.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(expresss.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})
require("./app/routes/member.routes.js")(app);
require("./app/routes/branch_manager.routes.js")(app);
require("./app/routes/payment.routes.js")(app);
require("./app/routes/auth.routes.js")(app);
require("./app/routes/manager.routes.js")(app);
require("./app/routes/equipment.routes.js")(app);
require("./app/routes/workout.routes.js")(app);
require("./app/routes/trainer.routes.js")(app);
// Export the Express API
module.exports = app