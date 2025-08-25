// server.js

const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
const mintRoutes = require("./routes/mint");


const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware: Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecretkey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 24 * 60 * 60, // 1 day
    }),
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
    },
  })
);



app.set("view engine", "ejs");
app.use(express.static("client"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/mint", mintRoutes);
app.use("/dashboard", require("./routes/dashboard"));
app.use("/auth", require("./routes/auth"));
app.use("/redeem", require("./routes/redeem"));
app.use("/gamezone", require("./routes/game"));
app.use("/marketplace", require("./routes/marketplace"));
app.use("/", require("./routes/index")); // Includes /dashboard, /mint, etc.

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
