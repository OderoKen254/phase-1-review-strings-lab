// Write your code in this file!

const currentUser = 'James Hamilton';

// string concantination using + operator
const aWelcomeMessage = 'Welcome to Flatbook' + currentUser + '!';

// string interpolation using backticks inside ${} i.e. template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// MDN operators (.toUpperCase(), .slice(), .substr(), .tolowerCase(), .toUpperCase(), .charAt())
// the .toUpperCase() string method returns the calling string value converted to uppercase (the value of the string itself is not changed) 
// and returns a new string value.
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

const aShortGreeting = welcomeMessage.toUpperCase;

const exitedShortGreeting = `welcome, ${currentUser}!`;

// slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
const shortGreeting2 = `Welcome, ${currentUser}!`;

// will be the same as below when with .slice method
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
