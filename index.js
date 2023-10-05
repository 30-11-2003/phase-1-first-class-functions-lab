// Code your solution in this file!

   const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
   
   const firstDrivers=[...drivers,]
    firstDrivers.splice(2,2)
    
    function returnFirstTwoDrivers(firstDrivers){
    return firstDrivers()
      
    }
console.log (returnFirstTwoDrivers (function(){return firstDrivers}))
    
    
    
    const lastDrivers=[...drivers,]
    lastDrivers.splice(0,2)
    
    function returnLastTwoDrivers(lastDrivers){
      return lastDrivers()

    }
    console.log(returnLastTwoDrivers(function(){return lastDrivers}))
    
    
     
     
    const selectingDrivers =[firstDrivers+ ","+lastDrivers]
    console.log (selectingDrivers)
    
    
    
    function createFareMultiplier(num1,num2){
      return num1*num2
    }
    console.log (createFareMultiplier(2,4))
    
    
    const fareDoubler= function (createFareMultiplier){
    return createFareMultiplier*2
    }
    console.log(fareDoubler(8))
    
    
    
    const fareTripler=function(createFareMultiplier){
      return createFareMultiplier*3
    }
    console.log(fareTripler(8))
    
    function selectDifferentDrivers(drivers,returnFirstTwoDrivers,returnLastTwoDrivers){
     
      return drivers && returnFirstTwoDrivers() || returnLastTwoDrivers()
    }
    console.log (selectDifferentDrivers())
