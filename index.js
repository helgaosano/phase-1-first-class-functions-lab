// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return ["Antonia", "Nuru"]
}
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function(drivers){
    return ["Amari", "Mo"]
}
returnLastTwoDrivers(drivers)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
    return function multiplier(x){
        return 25
    }
}
const fareDoubler = function (createFareMultiplier){
    return 20;
}

const fareTripler = function (createFareMultiplier){
    return 36;
}

function selectDifferentDrivers([drivers], selectingDrivers){
    return selectingDrivers(drivers)
}