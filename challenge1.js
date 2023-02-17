/*
restate the goal: Given an array of strings, return only the strings that have exactly 4 characters.

consider the data: 
- array
- strings
- for loop
- conditional (if statement)

clarifying questions: 

break it down:
1) declare a variable named friends and assign it to an array of strings
2) use a for loop to loop through the entire array
3) use a conditional to check if string === 4 characters
4) print strings

research:

*/
// start coding:

var friends = ["Tilden", "Murphy", "Sam", "Kate", "Sara"];

for (var i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
        console.log(friends[i]);
    }
}

// REFACTORED

// restate the goal: Given an array of strings, return only the strings that have exactly 4 characters. 
// make this code reusable by using a function
// consider the data: 
// - array
// - strings
// - string method .length
// - for loop
// - conditional (if statement)
// - function

// clarifying questions: 
// - How do I effectively pass an array as a parameter?

// break it down:
// 1) declare variable and assign it to an array with strings
// 2) declare a function to process the variable assigned to an array
// 3) set parameter to one element (variable?)
// 4) use a for loop to loop through array 
// 5) use an if statement to check if array is strictly equal to 4
// 6) console.log params[i]


// REFACTORED CODE W/ FUNCTION

var friends = ["Tilden", "Murphy", "Sam", "Kate", "Sara"];
var friends2 = ["Dave", "Milo", "Fred", "Charlie", "Emily"];


function processArray(params) {
    for (var i = 0; i < params.length; i++) {
        if (params[i].length === 4) {
            console.log(params[i]);
        }
    }
}

processArray(friends);
processArray(friends2);


