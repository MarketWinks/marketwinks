const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
var NumberInt = require('mongoose-int32');

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

const Watchlist = mongoose.model('Watchlist');


module.exports.getlistofWatchlistIDs = (req, res, next) =>{
    
    console.log(req.body);

    Watchlist.find({user: req.body.user, table: req.body.table, status: req.body.status}, (err, idlist) => {
        console.log("Here we get idlist");
        res.send(idlist);
    }
)

}

module.exports.additemtowatchlist = (req, res, next) =>{

    console.log("came to watchlist controller ");
    
    var watchlist = new Watchlist();
    watchlist.user = req.body.user;
    watchlist.table = req.body.table;
    watchlist.id = req.body._id;
    watchlist.status = req.body.status;

    watchlist.save((err, doc) => {
        if (!err){
console.log("watchlist item added");
        } else {
            console.log("watchlist item error");
        }
    });

    
}



module.exports.addonemorelike = (req, res, next) =>{

    console.log("came to ootha controller mama i am gonna like");
    console.log(req.body);
    
    if (req.body.table == "uk_lse_5minbuys"){
        console.log("I am in 5mins table");

    
        UK_LSE_5MinBuy.findOneAndUpdate({_id:req.body._id}, {$inc : {likes : 1}}, {new: true },function(err, response) {
            if (err) {
            console.log(err);
           } else {
            console.log(response);
           }});


//             (err, output) => {

//                 console.log("gotta the response in the last loop_5mins_printing likes");
//                 console.log(output);

                
//                 var myquery = { _id:output._id };
//                 var newvalues = { $set: { likes: {type: [Number], value: 10} } };

//                         UK_LSE_5MinBuy.updateOne(myquery, newvalues, function(err, res) {

            

//                             if(err){
//                                 console.log(err);
//                             }

                               
             
//                                 console.log(res);
//                                 console.log("gotta the response");
//                                }
//                     );
            
        
// })
    }


else if (req.body.table == "uk_lse_15minbuys"){
    UK_LSE_15MinBuy.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_15MinBuy.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}



else if (req.body.table == "uk_lse_30minbuys"){
    UK_LSE_30MinBuy.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_30MinBuy.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}



else if (req.body.table == "uk_lse_hourlybuys"){
    UK_LSE_HourlyBuy.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_HourlyBuy.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_dailybuys"){
    UK_LSE_DailyBuy.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_DailyBuy.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_weeklybuys"){
    UK_LSE_WeeklyBuy.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_WeeklyBuy.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_monthlybuys"){
    UK_LSE_MonthlyBuy.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_MonthlyBuy.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}



else if (req.body.table == "uk_lse_5minsells"){
    UK_LSE_5MinSell.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_5MinSell.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_15minsells"){
    UK_LSE_15MinSell.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_15MinSell.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_30minsells"){
    UK_LSE_30MinSell.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_30MinSell.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}



else if (req.body.table == "uk_lse_hourlysells"){
    UK_LSE_HourlySell.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_HourlySell.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_dailysells"){
    UK_LSE_DailySell.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_DailySell.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_weeklysells"){
    UK_LSE_WeeklySell.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_WeeklySell.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}


else if (req.body.table == "uk_lse_monthlysells"){
    UK_LSE_MonthlySell.findOne({_id:req.body._id}, 
        (err, output) => {

            console.log("gotta the response in the last loop");
            console.log(output);

            
            var myquery = { _id:req.body._id };
            var newvalues = { $set: {likes: 10} };

                    UK_LSE_MonthlySell.updateOne(myquery,newvalues, function(err, res) {

                        if(err){
                            console.log(err);
                        }

                           
         
                            console.log(res);
                            console.log("gotta the response");
                           }
                );
        
    
})
}



};





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

module.exports.getAllSignalsForAllIDsProfile = (req, res, next) =>{
    console.log("came to ootha controller for all signal table new new new");
    console.log(req.body);
    
    if (req.body.table == "uk_lse_5minbuys"){
    UK_LSE_5MinBuy.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}



else if (req.body.table == "uk_lse_15minbuys"){
    UK_LSE_15MinBuy.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}



else if (req.body.table == "uk_lse_30minbuys"){
    UK_LSE_30MinBuy.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}



else if (req.body.table == "uk_lse_hourlybuys"){
    UK_LSE_HourlyBuy.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_dailybuys"){
    
    UK_LSE_DailyBuy.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_weeklybuys"){
    UK_LSE_WeeklyBuy.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_monthlybuys"){
    UK_LSE_MonthlyBuy.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}



else if (req.body.table == "uk_lse_5minsells"){
    UK_LSE_5MinSell.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_15minsells"){
    UK_LSE_15MinSell.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_30minsells"){
    UK_LSE_30MinSell.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}



else if (req.body.table == "uk_lse_hourlysells"){
    UK_LSE_HourlySell.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_dailysells"){
    UK_LSE_DailySell.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_weeklysells"){
    UK_LSE_WeeklySell.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });

}


else if (req.body.table == "uk_lse_monthlysells"){
    UK_LSE_MonthlySell.find({_id: {$in: req.body._id}}, (err, signal) => {
        res.send(signal);
    });


}

}

module.exports.getAllSignalsForSymbolDetailsProfile = (req, res, next) =>{

    console.log("came to ootha controller for all signal table");
    console.log(req.body);
    
    if (req.body.table == "uk_lse_5minbuys"){
    UK_LSE_5MinBuy.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get for the 5mins buy fk");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_15minbuys"){
    UK_LSE_15MinBuy.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_30minbuys"){
    UK_LSE_30MinBuy.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_hourlybuys"){
    UK_LSE_HourlyBuy.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_dailybuys"){
    UK_LSE_DailyBuy.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_weeklybuys"){
    UK_LSE_WeeklyBuy.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_monthlybuys"){
    UK_LSE_MonthlyBuy.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_5minsells"){
    UK_LSE_5MinSell.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_15minsells"){
    UK_LSE_15MinSell.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_30minsells"){
    UK_LSE_30MinSell.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



else if (req.body.table == "uk_lse_hourlysells"){
    UK_LSE_HourlySell.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_dailysells"){
    UK_LSE_DailySell.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_weeklysells"){
    UK_LSE_WeeklySell.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}


else if (req.body.table == "uk_lse_monthlysells"){
    UK_LSE_MonthlySell.find({company:req.body.symbol}, (err, signal) => {
        console.log("Here we get");
        res.send(signal);
    }
)
}



};

