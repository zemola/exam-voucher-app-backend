const Promo = require("../models/promo");


//Create Voucher on the data base
exports.create = async (req, res) => {
    const data = req.body;
  const requiredFields = ['title', 'percentage', 'vouchers' ];

  const missingFields = requiredFields.filter((key => {
    return !Object.keys(data).includes(key)
  }));

  if (missingFields.length !== 0) {
    return res.status(400).json({
       message: 'Some fields are misssing, please check json input'
    })
  }

  const promo = await Promo.create({
    title:data.title,
    price: +data.percentage,
    description: data.vouchers
  });

  if (!promo) {
    return res.status(400).json({
      message: 'Promo creation faild, please try again'
    })
  }

  return res.status(200).json({
    message: 'Promo creation successful',
    data: {
      promo
    }
    
  })

}