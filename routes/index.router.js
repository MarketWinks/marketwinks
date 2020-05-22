const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlRssfeedNewsArticle = require('../controllers/rssfeedNewsArticle.controller');


const ctrlGetFullSignalDetails = require('../controllers/getFullSignalDetails.controller');


const ctrlUK_LSE_MonthlySell = require('../controllers/uK_LSE_MonthlySell.controller');
const ctrlUK_LSE_MonthlyBuy = require('../controllers/uK_LSE_MonthlyBuy.controller');
const ctrlUK_LSE_WeeklySell = require('../controllers/uK_LSE_WeeklySell.controller');
const ctrlUK_LSE_WeeklyBuy = require('../controllers/uK_LSE_WeeklyBuy.controller');
const ctrlUK_LSE_DailySell = require('../controllers/uK_LSE_DailySell.controller');
const ctrlUK_LSE_DailyBuy = require('../controllers/uK_LSE_DailyBuy.controller');
const ctrlUK_LSE_HourlySell = require('../controllers/uK_LSE_HourlySell.controller');
const ctrlUK_LSE_HourlyBuy = require('../controllers/uK_LSE_HourlyBuy.controller');
const ctrlUK_LSE_30MinSell = require('../controllers/uK_LSE_30MinSell.controller');
const ctrlUK_LSE_30MinBuy = require('../controllers/uK_LSE_30MinBuy.controller');
const ctrlUK_LSE_15MinSell = require('../controllers/uK_LSE_15MinSell.controller');
const ctrlUK_LSE_15MinBuy = require('../controllers/uK_LSE_15MinBuy.controller');
const ctrlUK_LSE_5MinSell = require('../controllers/uK_LSE_5MinSell.controller');
const ctrlUK_LSE_5MinBuy = require('../controllers/uK_LSE_5MinBuy.controller');


const ctrlUS_MonthlySell = require('../controllers/uS_MonthlySell.controller');
const ctrlUS_MonthlyBuy = require('../controllers/uS_MonthlyBuy.controller');
const ctrlUS_WeeklySell = require('../controllers/uS_WeeklySell.controller');
const ctrlUS_WeeklyBuy = require('../controllers/uS_WeeklyBuy.controller');
const ctrlUS_DailySell = require('../controllers/uS_DailySell.controller');
const ctrlUS_DailyBuy = require('../controllers/uS_DailyBuy.controller');
const ctrlUS_HourlySell = require('../controllers/uS_HourlySell.controller');
const ctrlUS_HourlyBuy = require('../controllers/uS_HourlyBuy.controller');
const ctrlUS_30MinSell = require('../controllers/uS_30MinSell.controller');
const ctrlUS_30MinBuy = require('../controllers/uS_30MinBuy.controller');
const ctrlUS_15MinSell = require('../controllers/uS_15MinSell.controller');
const ctrlUS_15MinBuy = require('../controllers/uS_15MinBuy.controller');
const ctrlUS_5MinSell = require('../controllers/uS_5MinSell.controller');
const ctrlUS_5MinBuy = require('../controllers/uS_5MinBuy.controller');


const jwtHelper = require('../config/jwtHelper');

router.get('/rssfeedNewsArticleProfile',ctrlRssfeedNewsArticle.rssfeedNewsArticleProfile);
router.post('/getFullSignalDetailsProfile',ctrlGetFullSignalDetails.getFullSignalDetailsProfile);

router.post('/register', ctrlUser.register);
router.post('/changePassword', ctrlUser.changePassword);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/verifyandactivateEmail', ctrlUser.verifyandactivateEmail);
router.get('/updateUserCategorytoFull', ctrlUser.updateUserCategorytoFull);
router.get('/updateUserCategorytoNonrenew', ctrlUser.updateUserCategorytoNonrenew);

router.get('/uK_LSE_DailySellProfile',ctrlUK_LSE_DailySell.uK_LSE_DailySellProfile);
router.get('/uK_LSE_DailyBuyProfile',ctrlUK_LSE_DailyBuy.uK_LSE_DailyBuyProfile);
router.get('/uK_LSE_WeeklySellProfile',ctrlUK_LSE_WeeklySell.uK_LSE_WeeklySellProfile);
router.get('/uK_LSE_WeeklyBuyProfile',ctrlUK_LSE_WeeklyBuy.uK_LSE_WeeklyBuyProfile);
router.get('/uK_LSE_MonthlySellProfile',ctrlUK_LSE_MonthlySell.uK_LSE_MonthlySellProfile);
router.get('/uK_LSE_MonthlyBuyProfile',ctrlUK_LSE_MonthlyBuy.uK_LSE_MonthlyBuyProfile);
router.get('/uK_LSE_HourlySellProfile',ctrlUK_LSE_HourlySell.uK_LSE_HourlySellProfile);
router.get('/uK_LSE_HourlyBuyProfile',ctrlUK_LSE_HourlyBuy.uK_LSE_HourlyBuyProfile);
router.get('/uK_LSE_30SMinellProfile',ctrlUK_LSE_30MinSell.uK_LSE_30MinSellProfile);
router.get('/uK_LSE_30MinBuyProfile',ctrlUK_LSE_30MinBuy.uK_LSE_30MinBuyProfile);
router.get('/uK_LSE_15MinSellProfile',ctrlUK_LSE_15MinSell.uK_LSE_15MinSellProfile);
router.get('/uK_LSE_15MinBuyProfile',ctrlUK_LSE_15MinBuy.uK_LSE_15MinBuyProfile);
router.get('/uK_LSE_5MinSellProfile',ctrlUK_LSE_5MinSell.uK_LSE_5MinSellProfile);
router.get('/uK_LSE_5MinBuyProfile',ctrlUK_LSE_5MinBuy.uK_LSE_5MinBuyProfile);




router.get('/uS_DailySellProfile',ctrlUS_DailySell.uS_DailySellProfile);
router.get('/uS_DailyBuyProfile',ctrlUS_DailyBuy.uS_DailyBuyProfile);
router.get('/uS_WeeklySellProfile',ctrlUS_WeeklySell.uS_WeeklySellProfile);
router.get('/uS_WeeklyBuyProfile',ctrlUS_WeeklyBuy.uS_WeeklyBuyProfile);
router.get('/uS_MonthlySellProfile',ctrlUS_MonthlySell.uS_MonthlySellProfile);
router.get('/uS_MonthlyBuyProfile',ctrlUS_MonthlyBuy.uS_MonthlyBuyProfile);
router.get('/uS_HourlySellProfile',ctrlUS_HourlySell.uS_HourlySellProfile);
router.get('/uS_HourlyBuyProfile',ctrlUS_HourlyBuy.uS_HourlyBuyProfile);
router.get('/uS_30SMinellProfile',ctrlUS_30MinSell.uS_30MinSellProfile);
router.get('/uS_30MinBuyProfile',ctrlUS_30MinBuy.uS_30MinBuyProfile);
router.get('/uS_15MinSellProfile',ctrlUS_15MinSell.uS_15MinSellProfile);
router.get('/uS_15MinBuyProfile',ctrlUS_15MinBuy.uS_15MinBuyProfile);
router.get('/uS_5MinSellProfile',ctrlUS_5MinSell.uS_5MinSellProfile);
router.get('/uS_5MinBuyProfile',ctrlUS_5MinBuy.uS_5MinBuyProfile);



router.post('/testentry_xx', ctrlUK_LSE_5MinBuy.testentry_buy);
router.post('/testentry', ctrlUK_LSE_DailySell.testentry);
router.post('/testentry_buy', ctrlUK_LSE_DailyBuy.testentry_buy);
module.exports = router;