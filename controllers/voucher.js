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


//Update voucher

exports.update = async (req, res) => {
  const data = req.body;
  const voucherId = req.params.id;

  const availableFields = ['title', 'price', 'description', 'image'  ];

  const isPart = Object.keys(data).filter(key => {
    return !availableFields.includes(key)
  });

  if (isPart.length !== 0) {
    return res.status(400).json ({
      message: 'Kindly send the right request'
    })
  }

  await Voucher.updateOne({_id: voucherId}, data);
  return res.status(200).json({
    message: 'Voucher updated successfully',
  })
}


//Delete voucher 

exports.delete = async (req, res) => {
  const VoucherID = req.params.id;
  try{
    await Voucher.deleteOne({_id:VoucherID});
  } catch(error){
    return res.status(400).json({
      message:'An Error occured, please try again'
    })
  }

  return res.status(200).json({
    message: 'Voucher deleted successfuly'
  })
}

