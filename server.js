const express = require("express")
const dotenv = require("dotenv")
const app = express();

require('./database/init.js')
require('./database/model/user.js')
dotenv.config({
  path:'./config/config.env',
});
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())
const api = require("./routes/api")
app.use('/api',api)


const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log(`Server rnning in ${process.env.NODE_ENV} mode on port ${PORT}`))