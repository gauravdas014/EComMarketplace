const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const morgan = require("morgan");

const authRouter = require("./routes/authRoutes");
const buyerRouter = require("./routes/buyerRoutes");
const sellerRouter = require("./routes/sellerRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/buyer", buyerRouter);
app.use("/api/seller", sellerRouter);

module.exports = app;
