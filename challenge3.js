/*
restate the goal: Given an array of strings, return only the words that begin with the letter "t".

consider the data: 
- array
- strings
- for loop
- conditional 
- string method (startsWith)

clarifying questions:

break it down:
1) declare a variable named locations and assign it to an array of strings 
2) use a for loop to loop through the array
3) use a the string method to isolate words that begin with the letter 't'

research: 
- MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
start coding:
stuck?
Refactor:
*/

var randomWords = ["region", "temperature", "uncle", "trim", "rich", "two"];

for (var i = 0; i < randomWords.length; i++) {
    if (randomWords[i].startsWith('t')) {
        console.log(randomWords[i]);
    }
}
