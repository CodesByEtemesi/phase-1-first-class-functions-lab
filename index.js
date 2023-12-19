// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

//lastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  //Array of the last 2 drivers
  const driversArray = ['Amari', 'Mo'];
  const lastTwoDrivers = returnLastTwoDrivers(driversArray);
  

  const arrayOfFunctions = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(multiplier) {
    
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  // Applying the created functions to calculate fares
  const originalFare = 40;
  
  const fareDoubled = fareDoubler(originalFare);
  const fareTripled = fareTripler(originalFare);

  
  console.log(fareDoubled);
  console.log(fareTripled);    
  
 