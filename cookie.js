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
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// var seattleCity = {
//   name: seattleArray[0],
//   minCust: seattleArray[1],
//   maxCust: seattleArray[2],
//   avgCook: seattleArray[3],
//   avgCustEachHour: []
// };
function City(name, minCust, maxCust, avgCook) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.avgCustEachHour = [];
  this.totalCookiesPerHour = [];
  this.totalCookies = 0;
};
City.prototype.randoCust = function () {
  var min = this.minCust;
  var max = this.maxCust;
  return Math.random() * (this.maxCust - this.minCust) + this.minCust
};

// Calculates the value of the array, customers (per object), over the length of the array storeHours, and assigns the value to the variable customers
City.prototype.randoEachHour = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var customers = this.randoCust() * this.avgCook
    this.avgCustEachHour.push(customers);
    console.log(customers);
  }
};
// Calculates the total value of cookies by taking the sum of the customers array and assigning it to a variable
City.prototype.sumTotal = function () {
  for (var i = 0; i < this.avgCustEachHour.length; i++)
   this.totalCookies = this.totalCookies + this.avgCustEachHour[i];
  return (this.totalCookies);
  console.log(this.totalCookies);
};


var seattleCity = new City('Seattle', 23, 65, 6.3);
var tokyoCity = new City('Tokyo', 3, 24, 1.2);
var dubaiCity = new City('Dubai', 11, 38, 3.7);
var parisCity = new City('Paris', 20, 38, 2.3);
var limaCity = new City('Lima', 2, 16, 4.6);


seattleCity.randoEachHour();
tokyoCity.randoEachHour();
dubaiCity.randoEachHour();
limaCity.randoEachHour();
parisCity.randoEachHour();
seattleCity.sumTotal();
tokyoCity.sumTotal();
dubaiCity.sumTotal();
limaCity.sumTotal();
parisCity.sumTotal();

// -------THIS BLOCK OF CODE WILL RENDER EACH OBJECT TO PAGE WITHIN A TABLE
City.prototype.renderStoresToTable = function () {
// Step 1) Identify the target

var myTable = document.getElementById('fishyTable');

  var newTrowEl = document.createElement('tr');
  var newThEl = document.createElement('th');
  newThEl.textContent = this.name;
  newTrowEl.appendChild(newThEl);

  //  2.2 comes from the sales data
  // 3. append
  var tdEl=document.createElement('td');
  tdEl.textContent = this.totalCookies;
  newTrowEl.appendChild(tdEl);

  myTable.appendChild(newTrowEl);
};

seattleCity.renderStoresToTable();
tokyoCity.renderStoresToTable();
dubaiCity.renderStoresToTable();
limaCity.renderStoresToTable();
parisCity.renderStoresToTable();

/*
Store.prototype.renderAsATableRow = function() {
  // 1. find the target
  var myTable = document.getElementById('cookieStores');
  // 2. create the content -
  //    2.1 put in a row)
  var newTrowEl = document.createElement('tr');
  //    actual text in cells(th and td)
  var newThEl = document.createElement('th');
  newThEl.textContent = this.storeName;
  newTrowEl.appendChild(newThEl);

  for(var i = 0; i < this.cookieSales.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookieSales[i];
    newTrowEl.appendChild(tdEl);
  }

  var tdEl = document.createElement('td');
  tdEl.textContent = this.total;
  newTrowEl.appendChild(tdEl);


  myTable.appendChild(newTrowEl);
};

*/
// City.renderToPage = function(){
//   var targetUlEl = document.getElementById('fishy')
//   var newliEl = document.createElement('li')
//   var storeText = City
//   newliEl.textContent = storeText
// };
// renderToPage(seattleCity);






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