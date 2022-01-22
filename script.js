// Assignment code here
//User Input Variables
var passwordLength
var lowerCase
var upperCase
var numbers
var specialChar

// Global Arrays
var selectedCharTypes = [];
var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var sc = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    // Stores returned random outputs into string
    var finalPassword = ""
        console.log ("before for loop")
        console.log (passwordLength)
        // This for loop randomly pulls CharTypes from selectedCharTypes Array
        for (r = 0; r < passwordLength; r++) {
        var digit = selectedCharTypes [Math.floor(Math.random() * (selectedCharTypes.length - 1))];
        switch (digit) {
        case "lc":
            var lcDigit = lc [Math.floor(Math.random() * (lc.length - 1))];
            finalPassword += lcDigit;
            break; 
        case "uc":
            var ucDigit = lc [Math.floor(Math.random() * (lc.length - 1))];
            ucDigit = ucDigit.toUpperCase();
            finalPassword += ucDigit;
            break;
        case "n": 
            var nDigit = Math.floor(Math.random() * 9);
            finalPassword += nDigit;
            break;
        case "sc":
            var scDigit = sc [Math.floor(Math.random() * (sc.length - 1))];
            finalPassword += scDigit;
            break;
        }
    }
    console.log (finalPassword)
    
    passwordText.value = finalPassword    
}

// Password criteria prompts
var criteria = function(){
    // choose length 8<x<128
    passwordLength = parseInt(window.prompt ("Choose a password length. Enter a number that is at least 8 and less than 128."));
    if (!passwordLength) {
        window.alert ('A password length is needed.');
        return criteria();
    } else if (passwordLength < 8 || passwordLength > 128){
        window.alert ('You must choose a number between 8 and 128');
        return criteria();
    } else {
        console.log ("Requested password length is " + passwordLength)
        //Choose Character Type: lowercase, UPPERCASE, #'s, Special characters
        // Adds confirmed types to selectedCharTypes array
        lowerCase = window.confirm ("Would you like like LOWERCASE letters in your password?");
        if (lowerCase) {
            selectedCharTypes.push ("lc");
        }
        
        upperCase = window.confirm ("Would you like like UPPERCASE letters in your password?");
        if (upperCase) {
            selectedCharTypes.push ("uc");
        }
        
        numbers = window.confirm ("Would you like like NUMBERS in your password?");
        if (numbers) {
            selectedCharTypes.push ("n");
        }
        
        specialChar = window.confirm ("Would you like like Special Characters like @#$!% in your password?"); 
        if (specialChar) {
            selectedCharTypes.push ("sc");
        }
        if (selectedCharTypes.length === 0) {
            window.alert ("You must select at least once type of character. Try again.");
            return criteria();
        }
        console.log (selectedCharTypes);
    }
    writePassword();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", criteria);