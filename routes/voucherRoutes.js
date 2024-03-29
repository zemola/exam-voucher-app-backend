const routeName = '/api/v1/voucher';


module.exports = (app) => {
  const voucherController = require('../controllers/voucher')

  app.post(routeName, voucherController.create);
  app.get(routeName, voucherController.readAllVoucher);
  app.get(`${routeName}/:id`, voucherController.read);
  app.put(`${routeName}/:id`, voucherController.update);
  app.delete(`${routeName}/:id`, voucherController.delete);

}