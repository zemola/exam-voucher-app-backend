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

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
},
{
  timestamps:true
}
);

module.exports = mongoose.model("Voucher", voucherSchema);