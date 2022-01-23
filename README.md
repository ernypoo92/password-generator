# Password Generator Starter Code
This was a project to write a program in javascript to generate a randomized password based off the criteria decided on by the user. The html and css was contributed by 'saucy parakeet' but the javascript was created by me.

# desired function
The java script is activated when the 'generate password' button is pushed. This triggers a series of prompts inquiring about the desired password length and character types (lowercase, uppercase, numbers, & special characters).

The users responses crafts an array including what ever character types are selected. Then in a 'for' loop Math.random chooses one of the previously selected Character Types and sends it through a switch to choose a random item form the global array's of character types. This is repeated until the desired password length and then it is published to the website.

# bugs
If no character type is selected the user is forced to re-specify the password length. 