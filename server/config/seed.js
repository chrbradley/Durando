/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Category = require('../api/category/category.model');
var Brand = require('../api/brand/brand.model');
var Item = require('../api/item/item.model');
var CategoryMonth = require('../api/categoryMonth/categoryMonth.model');
var ItemTactic = require('../api/itemTactic/itemTactic.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


CategoryMonth.find({}).remove(function() {
  CategoryMonth.create({
id:0,month:"Sep",sales:65,volume:40,margin:-2,profit:-1,transactions:20,impact:602},
{id:1,month:"Oct",sales:80,volume:35,margin:-1,profit:-1,transactions:18,impact:550},
{id:2,month:"Nov",sales:75,volume:35,margin:0,profit:0,transactions:20,impact:755},
{id:3,month:"Dec",sales:70,volume:38,margin:-1,profit:-2,transactions:30,impact:1220},
{id:4,month:"Jan",sales:60,volume:30,margin:0,profit:1,transactions:33,impact:1523},
{id:5,month:"Feb",sales:58,volume:28,margin:-1,profit:0,transactions:29,impact:1437},
{id:6,month:"Mar",sales:65,volume:35,margin:2,profit:3,transactions:23,impact:985},
{id:7,month:"Apr",sales:65,volume:37,margin:1,profit:2,transactions:28,impact:1307},
{id:8,month:"May",sales:75,volume:40,margin:3,profit:2,transactions:34,impact:1340},
{id:9,month:"Jun",sales:80,volume:35,margin:3,profit:1,transactions:35,impact:1573},
{id:10,month:"Jul",sales:73,volume:32,margin:1,profit:0,transactions:28,impact:1245},
{id:11,month:"Aug",sales:75,volume:30,margin:2,profit:1,transactions:28,impact:1354},
{id:12,month:"Target",sales:70,volume:40,margin:3,profit:5,transactions:30,impact:1500
}, function() {
      console.log('finished populating category months');
    }
  );
});

ItemTactic.find({}).remove(function() {
  ItemTactic.create({
 id: 0,item_id: 1,item: "Paper Cup Container",avgRetail: "$2.49 ",avgPromoPrice: "$2.00 ",page: 1,ad_weel: "12-01-02",ad_type: "QTY 3/$6",sales: 206,volume: 103,margin: 45,profit: 45,transactions: 34,impact: 1760,isBest: true,followUp: null,action: "Increase $3/6 tactics and reduce BOGO given very similar incremental sales performance and significantly stronger margin lift from QTY tactic",hiddenAction: null,actionColor: "green",actionOrder: 1},
{id: 1,item_id: 1,item: "Paper Cup Container",avgRetail: "$2.49 ",avgPromoPrice: "$2.00 ",page: 2,ad_weel: "12-03-12",ad_type: "QTY 3/$6",sales: 212,volume: 106,margin: 49,profit: 49,transactions: 36,impact: 1402,isBest: true,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 2,item_id: 1,item: "Paper Cup Container",avgRetail: "$2.49 ",avgPromoPrice: "$1.99 ",page: 1,ad_weel: "12-04-23",ad_type: "20% Off",sales: 146,volume: 73,margin: 33,profit: 33,transactions: 21,impact: 1075,isBest: false,followUp: "Test performance of additional percent off tactics",action: null,hiddenAction: "Performance of 20% and 24% events is strong, despite relatively few tactics for item / category",actionColor: "yellow",actionOrder: 3},
{id: 3,item_id: 1,item: "Paper Cup Container",avgRetail: "$2.49 ",avgPromoPrice: "$1.99 ",page: 1,ad_weel: "12-05-07",ad_type: "20% Off",sales: 161,volume: 81,margin: 28,profit: 28,transactions: 27,impact: 1125,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 4,item_id: 1,item: "Paper Cup Container",avgRetail: "$2.49 ",avgPromoPrice: "$1.89 ",page: 2,ad_weel: "12-07-30",ad_type: "24% Off",sales: 172,volume: 86,margin: 29,profit: 29,transactions: 22,impact: 1920,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 5,item_id: 1,item: "Paper Cup Container",avgRetail: "$2.49 ",avgPromoPrice: "$1.25 ",page: 2,ad_weel: "02-08-13",ad_type: "BOGO",sales: 228,volume: 183,margin: -1,profit: -1,transactions: 61,impact: 1871,isBest: false,followUp: "Investigate opportunity to increase vendor funding on BOGO events given strong sales / volume uplifts but poor margin performance",action: null,hiddenAction: null,actionColor: "yellow",actionOrder: 2},
{id: 12,item_id: 16,item: "Durandos",avgRetail: "$3.79 ",avgPromoPrice: "$3.00 ",page: 2,ad_weel: "11-11-13",ad_type: "QTY 3/$9",sales: 35,volume: 10,margin: 6,profit: 20,transactions: 15,impact: 893,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: "red",actionOrder: null},
{id: 10,item_id: 16,item: "Durandos",avgRetail: "$3.79 ",avgPromoPrice: "$2.50 ",page: 1,ad_weel: "12-07-30",ad_type: "QTY 2/$5",sales: 12,volume: 12,margin: -27,profit: -5,transactions: 7,impact: 615,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 11,item_id: 16,item: "Durandos",avgRetail: "$3.79 ",avgPromoPrice: "$2.00 ",page: 1,ad_weel: "11-12-21",ad_type: "QTY 2/$4",sales: 76,volume: 53,margin: 36,profit: 36,transactions: 43,impact: 2490,isBest: true,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 6,item_id: 16,item: "Durandos",avgRetail: "$3.79 ",avgPromoPrice: "$1.90 ",page: 1,ad_weel: "02-01-02",ad_type: "BOGO",sales: 106,volume: 60,margin: -103,profit: -33,transactions: 30,impact: 1929,isBest: false,followUp: null,action: "Reduce BOGO tactic for Durandos and increase usage of QT $2/4 as it produces very similar incremental sales but QTY tactic generates stronger incremental margin",hiddenAction: null,actionColor: "red",actionOrder: null},
{id: 7,item_id: 16,item: "Durandos",avgRetail: "$3.79 ",avgPromoPrice: "$1.90 ",page: 1,ad_weel: "02-03-12",ad_type: "BOGO",sales: 64,volume: 41,margin: -76,profit: -15,transactions: 23,impact: 1432,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 8,item_id: 16,item: "Durandos",avgRetail: "$3.79 ",avgPromoPrice: "$1.90 ",page: 2,ad_weel: "12-04-23",ad_type: "BOGO",sales: 89,volume: 59,margin: -99,profit: -27,transactions: 36,impact: 1625,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 9,item_id: 16,item: "Durandos",avgRetail: "$3.79 ",avgPromoPrice: "$1.90 ",page: 2,ad_weel: "13-05-07",ad_type: "BOGO",sales: 81,volume: 38,margin: -85,profit: -24,transactions: 29,impact: 2166,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 19,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$3.49 ",page: 1,ad_weel: "11-11-13",ad_type: "EDLP: $3.49",sales: 24,volume: 7,margin: 6,profit: 6,transactions: 6,impact: 452,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 20,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$3.49 ",page: 2,ad_weel: "11-11-20",ad_type: "EDLP: $3.49",sales: 22,volume: 6,margin: 4,profit: 4,transactions: 5,impact: 543,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 15,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$3.00 ",page: 2,ad_weel: "02-04-23",ad_type: "QTY 2/$6",sales: 104,volume: 35,margin: 6,profit: 15,transactions: 35,impact: 2702,isBest: true,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 16,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$3.00 ",page: 2,ad_weel: "12-05-07",ad_type: "QTY 2/$6",sales: 39,volume: 13,margin: 3,profit: 13,transactions: 36,impact: 1993,isBest: true,followUp: null,action: "Consolidate non-BOGO tactics to 2/$6 given relative performance v. other tactics",hiddenAction: null,actionColor: "green",actionOrder: 1},
{id: 17,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$2.99 ",page: 1,ad_weel: "12-07-30",ad_type: "Promo: $2.99",sales: 55,volume: -18,margin: -7,profit: -7,transactions: 64,impact: 3580,isBest: false,followUp: " Across Cookies with Chips reduce promotions from same category running in similar weeks to maximize single promotion effectiveness.",action: null,hiddenAction: "Examine week of July 30 2012 as high number of related promotions were run that week",actionColor: "yellow",actionOrder: 3},
{id: 18,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$2.99 ",page: 2,ad_weel: "11-12-21",ad_type: "Promo: $2.99",sales: -31,volume: -10,margin: -1,profit: 16,transactions: 21,impact: 1163,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null},
{id: 13,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$1.75 ",page: 1,ad_weel: "12-01-02",ad_type: "BOGO",sales: 366,volume: 209,margin: -250,profit: -120,transactions: 219,impact: 13127,isBest: false,followUp: null,action: "Reduce BOGO tactic to preserve margin and/or renegotiate with vendor for additional funding",hiddenAction: "Current tactic and funding generates large volume increases but negative margin impact",actionColor: "red",actionOrder: 2},
{id: 14,item_id: 27,item: "Cookies with Chips",avgRetail: "$3.49 ",avgPromoPrice: "$1.75 ",page: 1,ad_weel: "02-03-12",ad_type: "BOGO",sales: 147,volume: 84,margin: -103,profit: -41,transactions: 132,impact: 9345,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,actionOrder: null
}, function() {
      console.log('finished populacting item tactics');
    }
  );
});

Item.find({}).remove(function() {
  Item.create({
  id: 1,Category: 1,brand: 0,item: "Gidd OneTouch-ItsStuck",numEvents: 6,sales: 198,volume: 22,margin: 31,profit: 31,transactions: 34,impact: 1526,isBest: true,followUp: null,action: "Increase frequency of Gidd OneTouch-ItsStuck promotions",hiddenAction:"Current promotions show highest sales and margin: lift within the Category" ,actionColor:"green",disabled:false,ActionOrder:1},
{id: 0,Category: 1,brand: 0,item: "Gidd Crazy Wrap",numEvents: 3,sales: 134,volume: 5,margin: 26,profit: 26,transactions: 37,impact: 891,isBest: false,followUp: null,action: null,hiddenAction:null,actionColor:null,disabled:true,ActionOrder:null},
{id: 7,Category: 1,brand: 0,item: "Gidd Squares",numEvents: 3,sales: 157,volume: 2,margin: 16,profit: 16,transactions: 31,impact: 1750,isBest: false,followUp: null,action: null,hiddenAction:null,actionColor:null,disabled:true,ActionOrder:null},
{id: 2,Category: 1,brand: 0,item: "Gidd Sandwich Bags",numEvents: 2,sales: 131,volume: 9,margin: -2,profit: -2,transactions: 29,impact: 797,isBest: false,followUp: "Investigate discount depth / tactic and / or vendor funding levels to improve margin: performance on Gidd Sandwich Bags",action:null,hiddenAction:null,actionColor:"yellow",disabled:true,ActionOrder:2},
{id: 3,Category: 1,brand: 0,item: "Giddware Large",numEvents: 2,sales :142,volume: 63,margin: 25,profit: 25,transactions: 23,impact: 923,isBest: true,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 5,Category: 1,brand: 0,item: "Giddware Shareware",numEvents: 2,sales:154,volume: 65,margin: 9,profit: 9,transactions: 15,impact: 1511,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 6,Category: 1,brand: 0,item: "Giddware Entrée",numEvents: 1,sales: 102,volume: 31,margin: 15,profit: 15,transactions: 22,impact: 1003,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 4,Category: 1,brand: 0,item: "Giddware Variety",numEvents: 1,sales: 176,volume: 57,margin: 21,profit: 21,transactions: 17,impact: 1431,isBest: false,followUp: null,action: "Test increased frequency of Galdware Variety given strong incremental sales and margin: improvement",hiddenAction: null,actionColor: "green",disabled: true,ActionOrder: 3},
{id: 8,Category: 1,brand: 2,item: "Aluminum Foil 100 sf",numEvents: 6,sales: 126,volume: 50,margin: 24,profit: 24,transactions: 25,impact: 1298,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 9,Category: 1,brand: 2,item: "Alum Foil 150 sf",numEvents: 4,sales: 169,volume: 67,margin: 35,profit: 35,transactions: 41,impact: 1360,isBest: true,followUp: null,action: "Increase frequency of Alum Foil 150fs events given best incremental sales and margin: performance",hiddenAction: null,actionColor: "green",disabled: true,ActionOrder: 1},
{id: 13,Category: 1,brand: 2,item: "Non-Stick Foil",numEvents: 4,sales: 129,volume: 51,margin: 22,profit: 22,transactions: 16,impact: 802,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 10,Category: 1,brand: 2,item: "Alum Foil 250 sf",numEvents: 3,sales: 133,volume: 51,margin: 23,profit: 23,transactions: 32,impact: 717,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 11,Category: 1,brand: 2,item: "Heavy  Alum Foil",numEvents: 3,sales: 122,volume: 44,margin: 6,profit: 6,transactions: 29,impact: 990,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 15,Category: 1,brand: 2,item: "Wax paper",numEvents: 3,sales: 144,volume: 69,margin: 31,profit: 31,transactions: 34,impact: 1575,isBest: true,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 14,Category: 1,brand: 2,item: "Cooking Bag",numEvents: 2,sales: 152,volume: 46,margin: 20,profit: 20,transactions: 24,impact: 908,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 12,Category: 1,brand: 2,item: "Slow Cook Liners",numEvents: 2,sales :101,volume: 37,margin: 0,profit: 2,transactions: 19,impact: 1005,isBest: false,followUp: "Investigate opportunity to improve vendor funding levels on Hevy Alum Foil and Slow Cook liners given margin: performance",action: null,hiddenAction: "Current promotions generate significant lift by no margin: improvement",actionColor: "yellow",disabled: true,ActionOrder: 2},
{id: 17,Category: 8,brand: 5,item: "Cinnamon Toast",numEvents: 14,sales: 125,volume: 71,margin: -42,profit: -16,transactions: 36,impact: 3359,isBest: false,followUp: null,action: "Improve margin: performance of Sinnamon Toast through improved tactics or additional vendor funding",hiddenAction: "Examine tactics used on Cinnamon Toast v. other items to identify opportunities",actionColor: "green",disabled: true,ActionOrder: 1},
{id: 24,Category: 8,brand: 5,item: "Pun Puffs",numEvents: 13,sales: 71,volume: 46,margin: -20,profit: -1,transactions: 37,impact: 920,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 19,Category: 8,brand: 5,item: "Choc-Os",numEvents: 12,sales: 47,volume: 25,margin: -12,profit: 3,transactions: 12,impact: 1123,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 23,Category: 8,brand: 5,item: "Bad O-mens",numEvents: 10,sales: 99,volume: 50,margin: -79,profit: 10,transactions: 51,impact: 1798,isBest: true,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 20,Category: 8,brand: 5,item: "Cookie Cereal",numEvents: 9,sales: 89,volume: 52,margin: -40,profit: 6,transactions: 32,impact: 1957,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 21,Category: 8,brand: 5,item: "Gray Geese",numEvents: 8,sales: 69,volume: 36,margin: -36,profit: 7,transactions: 29,impact: 1823,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 16,Category: 8,brand: 5,item: "Durandos",numEvents: 7,sales: 113,volume: 68,margin: -69,profit: -30,transactions: 43,impact: 2390,isBest: false,followUp: "Investigate tactics and vendor funding levels for Durandos",action: null,hiddenAction: "Current tactics generate very strong sales and volumep erformance but low margin: contribution",actionColor: "yellow",disabled: false,ActionOrder: 2},
{id: 22,Category: 8,brand: 5,item: "Durando Puffs",numEvents: 7,sales: 49,volume: 24,margin: -51,profit: 3,transactions: 25,impact: 1301,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 18,Category: 8,brand: 5,item: "Chax",numEvents: 6,sales: 21,volume: 11,margin: -5,profit: -4,transactions: 9,impact: 450,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 28,Category: 5,brand: 14,item: "Golden Greys",numEvents: 24,sales: -1,volume: -1,margin: -1,profit: -1,transactions: 3,impact: 232,isBest: false,followUp: null,action: "Reduce Golden Greys events given poor sales and margin: performance relactive to other items within the brand" ,hiddenAction: null,actionColor: "red",disabled: true,ActionOrder: 2},
{id: 25,Category: 5,brand: 14,item: "100 Calorie",numEvents: 17,sales: 11,volume: 6,margin: -1,profit: -1,transactions: 5,impact: 165,isBest: false,followUp: "Investigate tactics and vendor funding levels for 100 Calorie and Apple Tarts ",action: null,hiddenAction: "Current approach drives strong sales / volumeu plift but poor margin: growth",actionColor: "yellow",disabled: true,ActionOrder: 3},
{id: 34,Category: 5,brand: 14,item: "Gingerbread Bats",numEvents: 17,sales: 3,volume: 2,margin: 1,profit: 1,transactions: 6,impact: 11,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 29,Category: 5,brand: 14,item: "Apple Tarts",numEvents: 16,sales: 10,volume: 5,margin: -4,profit: -1,transactions: 10,impact: 998,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 30,Category: 5,brand: 14,item: "Fudge Bites",numEvents: 16,sales: 7,volume: 3,margin: -3,profit: -2,transactions: 8,impact: 142,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 27,Category: 5,brand: 14,item: "Contains Chocolate",numEvents: 15,sales: 23,volume: 12,margin: -16,profit: -9,transactions: 56,impact: 3366,isBest: false,followUp: "Investigate Contains Chocolate promo performance variation by tactic and  discount depth to improve margin: performance",action: null,hiddenAction: "Current tactics generate strong sales lift but are accompanied by significant margin: erosion",actionColor: "yellow",disabled: false,ActionOrder: 1},
{id: 32,Category: 5,brand: 14,item: "Extra Nuts",numEvents: 15,sales: 4,volume: 2,margin: 1,profit: 1,transactions: 6,impact: 198,isBest: true,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 31,Category: 5,brand: 14,item: "Certifiables",numEvents: 13,sales: 5,volume: 3,margin: -4,profit: 0,transactions: 17,impact: 1019,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 26,Category: 5,brand: 14,item: "Durands Animal",numEvents: 11,sales: 4,volume: 3,margin: 1,profit: 2,transactions: 3,impact: 753,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null},
{id: 33,Category: 5,brand: 14,item: "Greys",numEvents: 10,sales: -9,volume: -3,margin: -2,profit: -2,transactions: 24,impact: 1244,isBest: false,followUp: null,action: null,hiddenAction: null,actionColor: null,disabled: true,ActionOrder: null
  }, function() {
      console.log('finished populating items');
    }
  );
});

Brand.find({}).remove(function() {
  Brand.create({
    id:2,
    Category:1,
    item:"Christophers",
    numberEvents:27,
    IncSalesMin:98,
    IncSalesMax:169,
    IncSalesMean:135,
    VolSalesMin:37,
    VolSalesMax:69,
    VolSalesMean:52,
    MarSalesMin:0,
    MarSalesMax:35,
    MarSalesMean:20,
    isBest:true,
    followUp:"Investigate drivers of variation in performance for Christophers and Gidd events as they are the most promoted brands and can most impact performance",
    action:null,
    hiddenAction:null,
    actionColor:"yellow",
    disabled:false,
    ActionOrder:1
  },
  {
    id:0,
    Category:1,
    item:"Gidd",
    numberEvents:20,
    IncSalesMin:102,
    IncSalesMax:236,
    IncSalesMean:149,
    VolSalesMin:31,
    VolSalesMax:71,
    VolSalesMean:57,
    MarSalesMin:-2,
    MarSalesMax:39,
    MarSalesMean:18,
    isBest:true,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:false,
    ActionOrder:null
  },
  {
    id:3,
    Category:1,
    item:"Sureseal",
    numberEvents:15,
    IncSalesMin:36,
    IncSalesMax:76,
    IncSalesMean:68,
    VolSalesMin:15,
    VolSalesMax:49,
    VolSalesMean:30,
    MarSalesMin:1,
    MarSalesMax:24,
    MarSalesMean:19,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:1,
    Category:1,
    item:"Private Brand",
    numberEvents:14,
    IncSalesMin:23,
    IncSalesMax:62,
    IncSalesMean:51,
    VolSalesMin:9,
    VolSalesMax:44,
    VolSalesMean:25,
    MarSalesMin:-1,
    MarSalesMax:27,
    MarSalesMean:22,
    isBest:false,
    followUp:null,
    action:"Consider reducing private brand promotional events and switching to higher performance branded events",
    hiddenAction:null,
    actionColor:"red",
    disabled:true,
    ActionOrder:2
  },
  {
    id:5,
    Category:8,
    item:"Common Presses",
    numberEvents:86,
    IncSalesMin:1,
    IncSalesMax:143,
    IncSalesMean:76,
    VolSalesMin:1,"VolSalesMax":90,
    VolSalesMean:42,
    MarSalesMin:-149,
    MarSalesMax:75,
    MarSalesMean:-49,
    isBest:false,
    followUp:"Investigate drivers of variation in brand performance for General Mills, Shelly and Post",
    action:null,
    hiddenAction:"These brands account for ~75% of the promo events but have wide spread performance across sales, volume and margin",
    actionColor:"yellow",
    disabled:false,
    ActionOrder:1
  },
  {
    id:6,
    Category:8,
    item:"Shelly",
    numberEvents:75,
    IncSalesMin:2,
    IncSalesMax:321,
    IncSalesMean:69,
    VolSalesMin:2,
    VolSalesMax:151,
    VolSalesMean:31,
    MarSalesMin:-160,
    MarSalesMax:29,
    MarSalesMean:-45,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:7,
    Category:8,
    item:"Post",
    numberEvents:30,
    IncSalesMin:-1,
    IncSalesMax:229,
    IncSalesMean:54,
    VolSalesMin:3,
    VolSalesMax:200,
    VolSalesMean:29,
    MarSalesMin:-139,
    MarSalesMax:5,
    MarSalesMean:-29,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:9,
    Category:8,
    item:"Private Brand",
    numberEvents:28,
    IncSalesMin:-2,
    IncSalesMax:42,
    IncSalesMean:13,
    VolSalesMin:1,
    VolSalesMax:39,
    VolSalesMean:6,
    MarSalesMin:-23,
    MarSalesMax:8,
    MarSalesMean:-2,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:8,
    Category:8,
    item:"EcoPro",
    numberEvents:23,
    IncSalesMin:0,
    IncSalesMax:187,
    IncSalesMean:92,
    VolSalesMin:0,
    VolSalesMax:120,
    VolSalesMean:52,
    MarSalesMin:-55,
    MarSalesMax:9,
    MarSalesMean:-25,
    isBest:true,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:4,
    Category:8,
    item:"Arrow Head",
    numberEvents:11,
    IncSalesMin:3,
    IncSalesMax:93,
    IncSalesMean:27,
    VolSalesMin:2,
    VolSalesMax:70,
    VolSalesMean:28,
    MarSalesMin:-31,
    MarSalesMax:2,
    MarSalesMean:-9,
    isBest:false,
    followUp:"Test additional tactics and items for Arrow Head promotions given relatively strong sales lift by margin erosion",
    action:null,
    hiddenAction:"Test top performing tactics in other brands, like Quantity discounts, on Arrow Head to identify additional opportunity to driver performance",
    actionColor:"yellow",
    disabled:true,
    ActionOrder:2
  },
  {
    id:14,
    Category:5,
    item:"Brads",
    numberEvents:154,
    IncSalesMin:-43,
    IncSalesMax:125,
    IncSalesMean:31,
    VolSalesMin:-33,
    VolSalesMax:97,
    VolSalesMean:10,
    MarSalesMin:-35,
    MarSalesMax:11,
    MarSalesMean:-4,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:"red",
    disabled:false,
    ActionOrder:null
  },
  {
    id:13,
    Category:5,
    item:"Shelly",
    numberEvents:126,
    IncSalesMin:-12,
    IncSalesMax:81,
    IncSalesMean:24,
    VolSalesMin:-3,
    VolSalesMax:46,
    VolSalesMean:5,
    MarSalesMin:-34,
    MarSalesMax:7,
    MarSalesMean:-2,
    isBest:false,
    followUp:"Investigate drivers for large variation in Brads and Shelly events",
    action:null,
    hiddenAction:"Assess item selection, tactics and levels of vendor funding for different events",
    actionColor:"yellow",
    disabled:true,
    ActionOrder:2
  },
  {
    id:10,
    Category:5,
    item:"Archway",
    numberEvents:45,
    IncSalesMin:-1,
    IncSalesMax:5,
    IncSalesMean:2,
    VolSalesMin:0,
    VolSalesMax:2,
    VolSalesMean:1,
    MarSalesMin:-1,
    MarSalesMax:2,
    MarSalesMean:1,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:15,
    Category:5,
    item:"Big Bob",
    numberEvents:26,
    IncSalesMin:2,
    IncSalesMax:16,
    IncSalesMean:10,
    VolSalesMin:1,
    VolSalesMax:5,
    VolSalesMean:3,
    MarSalesMin:-2,
    MarSalesMax:28,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:16,
    Category:5,
    item:"Shana's",
    numberEvents:25,
    IncSalesMin:1,
    IncSalesMax:3,
    IncSalesMean:2,
    VolSalesMin:1,
    VolSalesMax:2,
    VolSalesMean:1,
    MarSalesMin:-1,
    MarSalesMax:1,
    MarSalesMean:0,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:11,
    Category:5,
    item:"CookieFactory",
    numberEvents:17,
    IncSalesMin:-2,
    IncSalesMax:10,
    IncSalesMean:5,
    VolSalesMin:0,
    VolSalesMax:5,
    VolSalesMean:2,
    MarSalesMin:0,
    MarSalesMax:2,
    MarSalesMean:1,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:18,
    Category:5,
    item:"Voortman",
    numberEvents:17,
    IncSalesMin:-4,
    IncSalesMax:5,
    IncSalesMean:2,
    VolSalesMin:0,
    VolSalesMax:4,
    VolSalesMean:2,
    MarSalesMin:2,
    MarSalesMax:4,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:19,
    Category:5,
    item:"World Table",
    numberEvents:16,
    IncSalesMin:-6,
    IncSalesMax:31,
    IncSalesMean:16,
    VolSalesMin:-1,
    VolSalesMax:16,
    VolSalesMean:8,
    MarSalesMin:1,
    MarSalesMax:6,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
},
  {
    id:17,
    Category:5,
    item:"Crystal Farm",
    numberEvents:14,
    IncSalesMin:-1,
    IncSalesMax:25,
    IncSalesMean:13,
    VolSalesMin:0,
    VolSalesMax:17,
    VolSalesMean:11,
    MarSalesMin:0,
    MarSalesMax:5,
    MarSalesMean:3,
    isBest:true,
    followUp:null,
    action:"Increase Crystal Farm brand promotions, including running more successful promos and testing new tactics and items",
    hiddenAction:"Currently, very few events run, despite margin improvement.  Additional lift possible from both more frequency and new tactics",
    actionColor:"green",
    disabled:true,
    ActionOrder:1
  },
  {
    id:12,
    Category:5,
    item:"Private Brand",
    numberEvents:10,
    IncSalesMin:4,
    IncSalesMax:11,
    IncSalesMean:8,
    VolSalesMin:4,
    VolSalesMax:7,
    VolSalesMean:6,
    MarSalesMin:1,
    MarSalesMax:5,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:22,
    Category:2,
    item:"Drink Powder",
    numberEvents:14,
    IncSalesMin:-2,
    IncSalesMax:8,
    IncSalesMean:4,
    VolSalesMin:-1,
    VolSalesMax:5,
    VolSalesMean:3,
    MarSalesMin:-6,
    MarSalesMax:1,
    MarSalesMean:-3,
    isBest:false,
    followUp:null,
    action:"Reduce frequency of Drink  Powder events given relatively weaker sales, volume and margin performance",
    hiddenAction:null,
    actionColor:"red",
    disabled:true,
    ActionOrder:1
  },
  {
    id:25,
    Category:2,
    item:"Liquid Sugar",
    numberEvents:5,
    IncSalesMin:6,
    IncSalesMax:45,
    IncSalesMean:24,
    VolSalesMin:0,
    VolSalesMax:30,
    VolSalesMean:11,
    MarSalesMin:-1,
    MarSalesMax:12,
    MarSalesMean:4,
    isBest:true,
    followUp:null,
    action:"Increase promos across Temporal South, Carolina Kick and Liquid Sugar brands",
    hiddenAction:"Current tactics create sales lift and margin improvement, despite few events.  Increasing frequency could further improve category performance",
    actionColor:"green",
    disabled:true,
    ActionOrder:2
  },
  {
    id:20,
    Category:2,
    item:"4C",
    numberEvents:3,
    IncSalesMin:2,
    IncSalesMax:4,
    IncSalesMean:3,
    VolSalesMin:1,
    VolSalesMax:3,
    VolSalesMean:2,
    MarSalesMin:-1,
    MarSalesMax:0,
    MarSalesMean:0,
    isBest:false,
    followUp:"Test new tactics and items across all brands",
    action:null,
    hiddenAction:"Currently, relatively few events are used in Drink Mixes category.  Exploring new tactics and items to increase promos and / or focus on highest performing events could improve overall category lift and margin growth",
    actionColor:"yellow",
    disabled:true,
    ActionOrder:3
  },
  {
    id:21,
    Category:2,
    item:"Temporal South",
    numberEvents:3,
    IncSalesMin:9,
    IncSalesMax:14,
    IncSalesMean:11,
    VolSalesMin:6,
    VolSalesMax:10,
    VolSalesMean:7,
    MarSalesMin:3,
    MarSalesMax:6,
    MarSalesMean:5,
    isBest:true,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:23,
    Category:2,
    item:"Private Brand",
    numberEvents:3,
    IncSalesMin:3,
    IncSalesMax:7,
    IncSalesMean:5,
    VolSalesMin:2,
    VolSalesMax:5,
    VolSalesMean:3,
    MarSalesMin:3,
    MarSalesMax:5,
    MarSalesMean:4,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:24,
    Category:2,
    item:"Carolina Kick",
    numberEvents:2,
    IncSalesMin:5,
    IncSalesMax:11,
    IncSalesMean:8,
    VolSalesMin:3,
    VolSalesMax:7,
    VolSalesMean:5,
    MarSalesMin:4,
    MarSalesMax:6,
    MarSalesMean:5,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  }, function() {
    console.log('finished populating brands');
  }
  );
})

Category.find({}).remove(function() {
  Category.create({
    id : 5,
    item : "Cookies",
    numEvents : 450,
    sales : 0.04,
    volume : 0.03,
    margin : -0.05,
    profit : -0.04,
    transactions : 0.019999999999999997,
    impact : 0.049999999999999996,
    isBest : false,
    followUp : "Investigate Cookies brand, item and tactic performance in more detail, to find higher and lower performing promos",
    action : null,
    hiddenAction : "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
    actionColor : "yellow",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 4,
    item : "Bath Tissue",
    numEvents : 269,
    sales : 0.19,
    volume : 0.14,
    margin : 0.7,
    profit : 0.08,
    transactions : 0.13,
    impact : 0.18,
    isBest : true,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 8,
    item : "Cereal",
    numEvents : 253,
    sales : 0.24,
    volume : 0.19,
    margin : -0.22,
    profit : -0.22,
    transactions : 0.18,
    impact : 0.24,
    isBest : false,
    followUp : null,
    action : "Stop current high discount promotions in Cereal, and explore different promo tactics",
    hiddenAction : "Current approach causes significant margin erosion. New tactic needed to maintain sales lift without margin loss",
    actionColor : "red",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 0,
    item : "Juices",
    numEvents : 190,
    sales : 0.1,
    volume : 0.07,
    margin : 0.04,
    profit : 0.07,
    transactions : 0.060000000000000005,
    impact : 0.09,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 6,
    item : "Dressings",
    numEvents : 189,
    sales : 0.09,
    volume : 0.06,
    margin : 0.1,
    profit : 0.1,
    transactions : 0.049999999999999996,
    impact : 0.12,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 7,
    item : "Canned Vegetables",
    numEvents : 99,
    sales : 0.07,
    volume : 0.05,
    margin : 0.12,
    profit : 0.12,
    transactions : 0.04,
    impact : 0.07,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 9,
    item : "Laundry Detergent",
    numEvents : 86,
    sales : 0.13,
    volume : 0.09,
    margin : 0.14,
    profit : 0.14,
    transactions : 0.08,
    impact : 0.11,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : "red",
    disabled : true,
    ActionOrder : null
  },
  {
    id : 1,
    item : "Food Wrappers",
    numEvents : 76,
    sales : 0.21,
    volume : 0.16,
    margin : 0.16,
    profit : 0.16,
    transactions : 0.15,
    impact : 0.18,
    isBest : true,
    followUp : null,
    action : "Promote items in Food Wrapper more frequently, using current tactics",
    hiddenAction : "Despite relatively few promo events, Food Wrappers shows significant margin and profit lift",
    actionColor : "green",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 2,
    item : "Drink Mixes",
    numEvents : 30,
    sales : 0.03,
    volume : 0.02,
    margin : 0.01,
    profit : 0.02,
    transactions : 0.01,
    impact : 0.04,
    isBest : false,
    followUp : "Explore additional promo tactics and greater frequency for Drink Mixes",
    action : null,
    hiddenAction : "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
    actionColor : "yellow",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 3,
    item : "Household Cleaners",
    numEvents : 17,
    sales : 0.1,
    volume : 0.08,
    margin : 0.03,
    profit : 0.03,
    transactions : 0.07,
    impact : 0.1,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  }, function() {
      console.log('finished populating categories');
    }
  );
});
