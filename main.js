$(document).ready(function() {



// console.log("Your code goes in this document.");
//
// _.times(100, function() {
//   console.log("hi");
// });

// from notes
// var arrayOfArrays = [[1,2,3,'no'],[1,2,3,'yes'],[1,2,3,'no']]
// var arrayOfArrays.filter(function(elm) {
//   return _.contains(elm,'yes');
// });

// var result = jsObjects.filter(function( obj ) {
//   return obj.b == 6;
// });

// var allPrices = items.filter(function(price) {
//   return _.contains(price);
// });

// #1
var allPrices = _.pluck(items, "price");
var totalOfPrices = allPrices.reduce(function(a, b) {
  return a + b;
});
var firstAnswer = totalOfPrices / allPrices.length;

$('#answer1').replaceWith(firstAnswer);
// old way...
// document.getElementById('answer1').innerHTML = firstAnswer;

// #2


// #3
// var britPound = _.filter(items, function(currency_code) {
//   return currency_code === "GBP";
// });
// var getCurrencies = _.pluck(items, "currency_code");
// var britPound = function(m) {
//
// }
// var objWithGBP = _.findWhere(items, {
//   currency_code: "GBP"
// });
// var brittishProduct = _.map(objWithGBP, function(el) {
//   return [el.title, el.price]
// });
var objWithGBP = items.filter(function(l){
 return l.currency_code === "GBP";
});
var brittishProduct = _.map(objWithGBP, function(l) {
  return [l.title + ", " + l.price]
});

$('#answer3').replaceWith(brittishProduct + " GBP");

//#4
// var madeWithWood = items.filter(function(l) {
//   return l.materials === "wood";
// });
// var woodyProducts = _.map(madeWithWood, function(l) {
//   return [l.title]
// }));
// (function(l) {
//   if
//   return l.materials === "wood";
// });
var madeWithWood = items.filter(function(elm) {
  return _.contains(elm.materials,'wood');
});

// var withWood = " ";
//   madeWithWood.forEach(function(currVal, idx, arr) {
//     withWood += (currVal.listing_id + "<br>");
//   });
// $('answer4').text(withWood);
//
// // #5
// var eightOrMore = _.filter(items, function(l) {
//   return l.materials.length >= 8;
// });
//
// var display = _.map(eightOrMore, fucntion(l){
//   return l.title = "number:" + l.materials.length + "material:" + l.material;
// });
// $('answer5').text(display);

// #6
var madeBySellers = items.filter(function(l) {
  return l.who_made === "i_did";
});

$('#answer6').replaceWith(madeBySellers.length);























});
