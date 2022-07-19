const Voucher = require("../models/vouchers");

exports.create = async (req, res) => {
  const data = req.body;
  const requiredFields = ['title', 'price', 'description', 'image'  ];

  const missingFields = requiredFields.filter((key => {
    return !Object.key(data).includes(key)
  }));

  if (missingFields.length !== 0) {
    return res.status(400).json({
       message: 'Some fields are misssing, please check json input'
    })
  }

  const voucher = await Voucher.create({
    title:data.title,
    price: body.price,
    description: body.description,
    image: body.image
  });

  if (!voucher) {
    return res.status(400).json({
      message: 'Voucher creation faild, please try again'
    })
  }

  return res.status(200).json({
    message: 'Voucher creation successful',
    data: {
      voucher
    }
    
  })

}

