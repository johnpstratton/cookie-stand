'use strict';
/*
Stores the min/max hourly customers, and the average cookies per customer, in object properties
Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
Store the results for each location in a separate array… perhaps as a property of the object representing that location
Display the values of each array as unordered lists in the browser
*/
//Seattle will be first object
// Seattle object properties include : min/customers(23), Max/Customers(65), Avg cookie/sale (6.3)
// need to build an array for hours of operation
// 
var seattleArray = ['Seattle', 23, 65, 6.3]
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// var seattleCity = {
//   name: seattleArray[0],
//   minCust: seattleArray[1],
//   maxCust: seattleArray[2],
//   avgCook: seattleArray[3],
//   avgCustEachHour: []
// };
function City (name, minCust, maxCust, avgCook, [], [], []) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.avgCustEachHour = [];
  this.customers = [];
  this.totalCookiesPerHour = [];
}
City.prototype.randoCust = function () {
  var min = this.minCust;
  var max = this.maxCust;
  return Math.random() * (this.maxCust - this.minCust) + this.minCust
};
City.prototype.randoEachHour = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var customers = this.City.randoCust()
    this.avgCustEachHour.push(customers)
  }
};
City.prototype.totalCookiesHour = function () {
  for (i = 0; i < customers.length; i++) {
    var totalCookiesPerHour = this.City.randoEachHour() * this.avgCook.push(totalCookiesPerHour)

  }
};
// City.prototype.randoCust();
// console.log(this.avgCustEachHour);
// totalCookiesHour();
// console.log(randoCust(

var seattleCity = new City('Seattle', 23, 65, 6.3, [], [], []);
var tokyoCity = new City('Tokyo', 3, 24, 1.2, [], [], []);
var dubaiCity = new City('Dubai', 11, 38, 3.7, [], [], []);
var parisCity = new City('Paris', 20, 38, 2.3, [], [], []);
var limaCity = new City('Lima', 2, 16, 4.6, [], [], []);

// return (seattleCity);
// console.log(seattleCity);
// this.randoCust();
// console.log(tokyoCity);
// console.log(dubaiCity);
// console.log(parisCity);
// console.log(limaCity);



// var seattleCity = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCook: 6.3,
//   avgCustEachHour: []
// };
//   };
// };
// // seattleCity.randoCust();
// // console.log(seattleArray);


// var tokyoCity = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCook: 1.2,
//   avgCustEachHour: []
// };
// tokyoCity.randoCust = function () {
//   var min = this.minCust;
//   var max = this.maxCust;
//   return Math.random() * (this.maxCust - this.minCust) + this.minCust
// };
// tokyoCity.randoEachHour = function () {
//   for (var i = 0; i < storeHours.length; i++) {
//     var customers = tokyoCity.randoCust()
//     this.avgCustEachHour.push(customers)
//   };
// };


// var dubaiCity = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCook: 3.7,
//   avgCustEachHour: []
// };
// dubaiCity.randoCust = function () {
//   var min = this.minCust;
//   var max = this.maxCust;
//   return Math.random() * (this.maxCust - this.minCust) + this.minCust
// };
// dubaiCity.randoEachHour = function () {
//   for (var i = 0; i < storeHours.length; i++) {
//     var customers = dubaiCity.randoCust()
//     this.avgCustEachHour.push(customers)
//   }
// };
// // Paris	20	38	2.3
// //Lima	2	16	4.6

// var parisCity = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCook: 2.3,
//   avgCustEachHour: []
// };
// parisCity.randoCust = function () {
//   var min = this.minCust;
//   var max = this.maxCust;
//   return Math.random() * (this.maxCust - this.minCust) + this.minCust
// };
// parisCity.randoEachHour = function () {
//   for (var i = 0; i < storeHours.length; i++) {
//     var customers = parisCity.randoCust()
//     this.avgCustEachHour.push(customers)
//   }
// };


// var limaCity = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCook: 4.6,
//   avgCustEachHour: []
// };
// limaCity.randoCust = function () {
//   var min = this.minCust;
//   var max = this.maxCust;
//   return Math.random() * (this.maxCust - this.minCust) + this.minCust
// };
// limaCity.randoEachHour = function () {
//   for (var i = 0; i < storeHours.length; i++) {
//     var customers = limaCity.randoCust()
//     this.avgCustEachHour.push(customers)
//   }
// };