/**
 * The Age Calculator
Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
 */

 // create a function that takes in 2 variables
    // currentyear, birthYear are the variables
 // subtract the one variable from the other
    //subtract birthYear from currentYear
    //their age could be the result from the subtraction or the result minus one (their birthday hasn't come yet)
 // use temp literal to print output

 function ageCalc(currentYear, birthYear)
 {
     let age = currentYear - birthYear;

     return `They are either ${age} or ${age - 1}.`
 }

 console.log(ageCalc(2020, 1955));