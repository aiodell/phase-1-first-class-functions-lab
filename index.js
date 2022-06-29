// Code your solution in this file!

// create function to return the first two drivers
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(0,2);
}

// create function to return the last two drivers
const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(-2);
}

// create an array containing two elements: the two functions defined
const selectingDrivers = [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)];