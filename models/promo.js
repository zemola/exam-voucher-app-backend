const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promoSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  percentage: {
    type: Number,
    required: true,
  },

  vouchers: [],
},
{
  timestamps:true
}
);

module.exports = mongoose.model("Promo", promoSchema);