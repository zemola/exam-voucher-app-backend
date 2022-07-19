const Voucher = require("../models/vouchers");


//Create Voucher on the data base
exports.create = async (req, res) => {
    const data = req.body;
  const requiredFields = ['title', 'price', 'description', 'image'  ];

  const missingFields = requiredFields.filter((key => {
    return !Object.keys(data).includes(key)
  }));

  if (missingFields.length !== 0) {
    return res.status(400).json({
       message: 'Some fields are misssing, please check json input'
    })
  }

  const voucher = await Voucher.create({
    title:data.title,
    price: +data.price,
    description: data.description,
    image: data.image
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

//Get All voucher from database
exports.readAllVoucher = async (req, res) => {
  const voucher = await Voucher.find({});
  return res.status(200).json({
    message: 'Voucher obtained successfuly',
    data: {
      voucher
    }
  })
}


//read voucher base on id from database
exports.read = async (req, res) => {
  const id = req.params.id;

  const voucher = await Voucher.find({_id: id});
  return res.status(200).json({
    message: 'Voucher obbtained succcefully',
    data: voucher
  })


}

