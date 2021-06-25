const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var app = express();

mongoose.connect(
    "mongodb://localhost:27017/flexmdb",
    { useNewUrlParser: true },
    (err) => {
      if (!err) {
        console.log("Mongodb connected");
      }
    }
  );

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
let authRoute = express.Router();
app.use("/api/v1/auth", authRoute);
require("./routes/auth")(authRoute);


let adminRoute = express.Router();
app.use("/api/v1/admin", adminRoute);
require("./routes/admin")(adminRoute);

app.listen(5000, () => {
  console.log("Express server is started at port : 5000");
});



