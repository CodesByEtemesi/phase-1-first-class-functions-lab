// Code your solution in this file!
  
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}

//  returnFirstTwoDrivers
console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']

// returnLastTwoDrivers
console.log(returnLastTwoDrivers(drivers)); // ['Amari', 'Mo']

// selectingDrivers
console.log(selectingDrivers[0](drivers)); // ['Antonia', 'Nuru']
console.log(selectingDrivers[1](drivers)); // ['Amari', 'Mo']

// createFareMultiplier
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5)); // 25

// fareDoubler
console.log(fareDoubler(10)); // 20

// fareTripler
console.log(fareTripler(12)); // 36

// selectDifferentDrivers
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Amari', 'Mo']
