// Check given number is Prime or not : Prime numbers are the numbers that have only two factors:  1 and themseleves

var num = 37
var isPrime = true

for(var i=2; i<num; i++)
{
    if(num % i === 0)
    {
        isPrime = false
        break;
    }
}
if(isPrime)
{
    console.log("Number is prime")
}
else
{
    console.log("Number is not a prime number")
}