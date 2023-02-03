const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const indexRouter = require("./routes/IndexRoute");
const itemRouter = require("./routes/ItemRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
import config from './config';

require('dotenv/config');

const { DB_CONNECTION } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/item", itemRouter);

// db connection
var dbState = [
  { value: 0, label: "disconnected" },
  { value: 1, label: "connected" },
  { value: 2, label: "connecting" },
  { value: 3, label: "disconnecting" },
];

// DB Config
const db = `${DB_CONNECTION}`;

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => {
    const state = Number(mongoose.connection.readyState);
    console.log(db.find((f) => f.value == state).label, "to db");
    // connected to db
  }
);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
