// server.js
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const redeemRoutes = require("./routes/redeem");
const gameRoutes = require('./routes/game');

const session = require('express-session');
const MongoStore = require('connect-mongo'); // if using MongoDB for session storage


dotenv.config();
connectDB(); // connect to MongoDB

app.set("view engine", "ejs");
app.use(express.static("client"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/redeem", redeemRoutes);
app.use("/", require("./routes/index"));
app.use("/gamezone", require("./routes/game"));


app.use('/', gameRoutes);


app.use(session({
  secret: 'secret-key', // put a strong one in production
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/aniverse' }), // update your Mongo URL
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
