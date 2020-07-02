/**
 * The Temperature Converter
Let's make a program to convert celsius tempatures to fahrenheit and vice versa, so we can complain about the weather with our friends oversees.

Reminder: To convert celsius to fahrenheit, multiply by 9, then divide by 5, then add 32. To convert fahrenheit to celsius, deduct 32, then multiply by 5, then divide by 9.

Unicode Characters: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degress symbol.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."

Challenge Question: Using Math functions
JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called a method. We'll talk about methods more later in the class. For now, know if you type Math.random(), you'll get a random number between 0 and 1.

Using this tool, update your fahrenheit to celsius tempature conversion program to do the following:

Instead of inputing a value for the Fahrenheit tempature, use Math.random() to generate a random tempature between 0 and 100
Have to program output: "It is NN°F today. That's NN°C."
 */

 // create a function that accepts one argument
    //one argument is enough because we will use that number to convert both ways
 // covert the number from celcius to Fahrenheit
    // we assume that number (argument) is in celcius and we convert it to fahrenheit
 // convert the number from Fahrenheit to celcius
    // we assume that number (argument) is in fahrenheit and we convert it to celcius
 // use temp literal to output answers in from F to C and C to F

 function tempCalc (){
   
   
      let temp = Math.ceil(Math.random() * 100);


     let fahrenheit = ((temp*9)/5) + 32; // we are assuming temp is celcius and we want it in Fahrenheit
     let celcius = ((temp - 32) * 5) / 9;// we are assuming temp is fahrenheit and we want it in celcius

    return `${temp}\xB0C is ${ fahrenheit }\xB0F and ${temp}\xB0F is ${ celcius }\xB0C`
 }
 console.log(tempCalc());

 //console.log(t);