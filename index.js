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
  
  // Example usage:
  const fareDoubler = createFareMultiplier(2);
  const fareMultiplierBy2 = createFareMultiplier(2);
  
  // Applying the created functions to calculate fares
  const originalFare = 20;
  
  const fareQuadrupled = fareDoubler(originalFare);
  //const fareDoubled = fareMultiplierBy2(originalFare);
  
  console.log(fareQuadrupled); // Output: 80 (20 * 4)
  //console.log(fareDoubled);    // Output: 40 (20 * 2)
  
  
  //console.log(firstTwoDrivers);
  //console.log(lastTwoDrivers); // Output: ["Amari", "Mo"]
  