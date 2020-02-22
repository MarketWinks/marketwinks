const mongoose = require('mongoose');
require('./user.model');
require('./dailySell.model');
require('./dailyBuy.model');
require('./weeklySell.model');
require('./weeklyBuy.model');


require('./monthlySell.model');
require('./monthlyBuy.model');
require('./hourlySell.model');
require('./hourlyBuy.model');

require('./mins30Sell.model');
require('./mins30Buy.model');
require('./mins15Sell.model');
require('./mins15Buy.model');

require('./mins5Sell.model');
require('./mins5Buy.model');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

