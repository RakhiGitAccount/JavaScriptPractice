// Write a program to check a year is leap year or not
var year = 2001

if(year% 4 === 0 &&  year % 100 != 0 || year % 400 === 0){
    console.log("Given year " +year+ " is a leap year.")
}
else
{
    console.log("Given year " +year+ " is not a leap year.")
}