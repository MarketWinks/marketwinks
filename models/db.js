const mongoose = require('mongoose');
require('./user.model');
require('./profile.model');

require('./rssfeedNewsArticle.model');
require('./symbol.model');

require('./uK_LSE_MonthlySell.model');
require('./uK_LSE_MonthlyBuy.model');
require('./uK_LSE_WeeklySell.model');
require('./uK_LSE_WeeklyBuy.model');
require('./uK_LSE_DailySell.model');
require('./uK_LSE_DailyBuy.model');
require('./uK_LSE_HourlySell.model');
require('./uK_LSE_HourlyBuy.model');
require('./uK_LSE_30MinSell.model');
require('./uK_LSE_30MinBuy.model');
require('./uK_LSE_15MinSell.model');
require('./uK_LSE_15MinBuy.model');
require('./uK_LSE_5MinSell.model');
require('./uK_LSE_5MinBuy.model');


require('./uS_MonthlySell.model');
require('./uS_MonthlyBuy.model');
require('./uS_WeeklySell.model');
require('./uS_WeeklyBuy.model');
require('./uS_DailySell.model');
require('./uS_DailyBuy.model');
require('./uS_HourlySell.model');
require('./uS_HourlyBuy.model');
require('./uS_30MinSell.model');
require('./uS_30MinBuy.model');
require('./uS_15MinSell.model');
require('./uS_15MinBuy.model');
require('./uS_5MinSell.model');
require('./uS_5MinBuy.model');


mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});
