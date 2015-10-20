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
var priceRange = _.chain(allPrices).filter(function(price) {
  return price >= 14 && price <= 18;
});

// #3
var getCurrencies = _.pluck(items, "currency_code");
var britPound = function(m) {

}























});
