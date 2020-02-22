const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlDailySell = require('../controllers/dailySell.controller');
const ctrlDailyBuy = require('../controllers/dailyBuy.controller');
const ctrlWeeklySell = require('../controllers/weeklySell.controller');
const ctrlWeeklyBuy = require('../controllers/weeklyBuy.controller');

const ctrlMonthlySell = require('../controllers/monthlySell.controller');
const ctrlMonthlyBuy = require('../controllers/monthlyBuy.controller');
const ctrlHourlySell = require('../controllers/hourlySell.controller');
const ctrlHourlyBuy = require('../controllers/hourlyBuy.controller');


const ctrlMins30Sell = require('../controllers/mins30Sell.controller');
const ctrlMins30Buy = require('../controllers/mins30Buy.controller');
const ctrlMins15Sell = require('../controllers/mins15Sell.controller');
const ctrlMins15Buy = require('../controllers/mins15Buy.controller');
const ctrlMins5Sell = require('../controllers/mins5Sell.controller');
const ctrlMins5Buy = require('../controllers/mins5Buy.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/dailySellProfile',ctrlDailySell.dailySellProfile);
router.get('/dailyBuyProfile',ctrlDailyBuy.dailyBuyProfile);
router.get('/weeklySellProfile',ctrlWeeklySell.weeklySellProfile);
router.get('/weeklyBuyProfile',ctrlWeeklyBuy.weeklyBuyProfile);


router.get('/monthlySellProfile',ctrlMonthlySell.monthlySellProfile);
router.get('/monthlyBuyProfile',ctrlMonthlyBuy.monthlyBuyProfile);
router.get('/hourlySellProfile',ctrlHourlySell.hourlySellProfile);
router.get('/hourlyBuyProfile',ctrlHourlyBuy.hourlyBuyProfile);
router.get('/mins30SellProfile',ctrlMins30Sell.mins30SellProfile);
router.get('/mins30BuyProfile',ctrlMins30Buy.mins30BuyProfile);

router.get('/mins15SellProfile',ctrlMins15Sell.mins15SellProfile);
router.get('/mins15BuyProfile',ctrlMins15Buy.mins15BuyProfile);
router.get('/mins5SellProfile',ctrlMins5Sell.mins5SellProfile);
router.get('/mins5BuyProfile',ctrlMins5Buy.mins5BuyProfile);



router.post('/testentry', ctrlDailySell.testentry);
router.post('/testentry_buy', ctrlDailyBuy.testentry_buy);
module.exports = router;