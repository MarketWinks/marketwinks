const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const UK_LSE_5MinBuy = mongoose.model('UK_LSE_5MinBuy');
const UK_LSE_15MinBuy = mongoose.model('UK_LSE_15MinBuy');
const UK_LSE_30MinBuy = mongoose.model('UK_LSE_30MinBuy');
const UK_LSE_HourlyBuy = mongoose.model('UK_LSE_HourlyBuy');
const UK_LSE_DailyBuy = mongoose.model('UK_LSE_DailyBuy');
const UK_LSE_WeeklyBuy = mongoose.model('UK_LSE_WeeklyBuy');
const UK_LSE_MonthlyBuy = mongoose.model('UK_LSE_MonthlyBuy');

const UK_LSE_5MinSell = mongoose.model('UK_LSE_5MinSell');
const UK_LSE_15MinSell = mongoose.model('UK_LSE_15MinSell');
const UK_LSE_30MinSell = mongoose.model('UK_LSE_30MinSell');
const UK_LSE_HourlySell = mongoose.model('UK_LSE_HourlySell');
const UK_LSE_DailySell = mongoose.model('UK_LSE_DailySell');
const UK_LSE_WeeklySell = mongoose.model('UK_LSE_WeeklySell');
const UK_LSE_MonthlySell = mongoose.model('UK_LSE_MonthlySell');


module.exports.getFullSignalDetailsProfile = (req, res, next) =>{

    console.log("came to ootha controller");
    console.log(req.body);
    
    if (req.body.table == "uk_lse_5minbuys"){
    UK_LSE_5MinBuy.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_15minbuys"){
    UK_LSE_15MinBuy.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_30minbuys"){
    UK_LSE_30MinBuy.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_hourlybuys"){
    UK_LSE_HourlyBuy.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_dailybuys"){
    UK_LSE_DailyBuy.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_weeklybuys"){
    UK_LSE_WeeklyBuy.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_monthlybuys"){
    UK_LSE_MonthlyBuy.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_5minsells"){
    UK_LSE_5MinSell.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_15minsells"){
    UK_LSE_15MinSell.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_30minsells"){
    UK_LSE_30MinSell.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_hourlysells"){
    UK_LSE_HourlySell.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_dailysells"){
    UK_LSE_DailySell.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_weeklysells"){
    UK_LSE_WeeklySell.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_monthlysells"){
    UK_LSE_MonthlySell.findById(req.body._id, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



};

