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
1) declare a variable named randomWords and assign it to an array of strings 
2) use a for loop to loop through the array
3) use a the string method to isolate words that begin with the letter 't'

research: 
- MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
*/

// start coding:

var randomWords = ["region", "Temperature", "uncle", "trim", "rich", "two"];

for (var i = 0; i < randomWords.length; i++) {
    if (randomWords[i].startsWith('t') || randomWords[i].startsWith('T')) {
        console.log(randomWords[i]);
    }
}


// REFACTORED CODE W/ FUNCTION

var randomWords2 = ["this", "Tax", 'same', 'theatre', 'bond', 'Thank'];

function processArray(params) {
    for (var i = 0; i < params.length; i++) {
        if (params[i].startsWith('t') || params[i].startsWith('T')) {
            console.log(params[i]);
        }
    }
}

processArray(randomWords);
processArray(randomWords2);







