const inputString = "Hello World"
console.log("Original string is:" ,inputString)

function toggledCharacters(str)
{
    var toggledStr =""

    for( s of str) 
    {
        if(s>= 'A' && s<='Z')
        {
            console.log(`'${s}' is Uppercase, converting to Lowercase`);
            toggledStr += s.toLowerCase();
        }
        else if(s>= 'a' && s<='z')
        {
            console.log(`'${s}' is lower, converting to Lowercase`);
            toggledStr += s.toUpperCase();
        }
        else {
            console.log(`'${s}' is not a letter, keeping as is`);
            toggledStr += s; // Keep non-letter characters unchanged
        }
    }
    return toggledStr;

}

const outcome = toggledCharacters(inputString)
console.log("Toggled String: " ,outcome);