const routeName = './api/v1/voucher';

module.exports = (app) => {
  const voucherController = require('../controllers/voucher')

  app.post(routeName, voucherController.create);
}