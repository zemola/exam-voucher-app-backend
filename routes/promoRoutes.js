const routeName = '/api/v1/promo';


module.exports = (app) => {
  const promoController = require('../controllers/promoController')

  app.post(routeName, promoController.create);

}