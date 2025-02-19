//Write a program to check if the candidate eligible for Voting or not: Eligible age > = 18 and a citizen and registered for vote, then display a message saying that they are elegible for Vote

var candidateAge= 25
var isCitizen = false
var isRegistered = false

if (candidateAge >= 18)
{
    if(isCitizen)
    {
        if(isRegistered )
        {
            console.log("Congratulation !! You are elegible for voting.")
        }
        else
        {
            console.log("you are not registered for voting.")
        }

    }
    else
    {
        console.log("You are not elegible for voting as you dont have citizenship.")
    }

}
else{
    console.log("You are not elegible for voting due to age.")
}