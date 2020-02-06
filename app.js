const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const keys = require("./config/keys");
const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");

mongoose.set("useCreateIndex", true);
mongoose
  .connect(keys.MONGO_URI, {
    // useCreateIndexes: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(require("morgan")("dev"));
// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(require("cors")());

app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);

module.exports = app;
