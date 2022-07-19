const  express = require("express");
const app = express();
const mongoose =require("mongoose"); //connent to use mongoose
const bodyParser = require("body-parser"); //connent to bodyparse
const PORT = 8080;



app.use(bodyParser.json());


require('./routes/voucherRoutes')(app);

mongoose.connect("mongodb+srv://React:React@cluster0.83l2v.mongodb.net/?retryWrites=true&w=majority").then(() => {
  app.listen(PORT, () => console.log("SERVER IS RUNNING"));
})
.catch((error) => console.log(error));

