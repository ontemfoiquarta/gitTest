/* We have to get user input; - > we parse int propmpt
Then, we show in console all the 
numbers from 1 to the user's number; -> for loop
Any number divisible by 3 we print - Fizz;
Anu number divisible by 5 we print- Buzz;
Any number divisible by both we print  - FizzBuss;*/

/*
let userInput = parseInt(prompt("Please, enter a number?"))

for (let i=1; i <= userInput; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log ("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log (i);
    }
}
*/
    
/* We have to get 10 numbers; -> an array of inputs
We have to loop through them; - -> for loop (I didn't have to loop)
We have to compare them between themselves;
Print the 3rd highest number */


const numbers = [0,1,2,17,4,5,98,7,8,9,10];

numbers.sort((a,b) => b-a)
console.log (numbers [2]);

/*

declared an array;
sorted the array in descending using the sort() method;
logged the third element of the array
*/