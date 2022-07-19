const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voucherSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  orders: [],
});

module.exports = mongoose.model("Voucher", voucherSchema);