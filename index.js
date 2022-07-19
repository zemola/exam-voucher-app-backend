const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080 || process.env.PORT;


mongoose
  .connect("mongodb://localhost/test-app")
  .then(() => {
    app.listen(PORT, () => console.log("SERVER IS RUNNING"));
  })
  .catch((error) => console.log(error));
