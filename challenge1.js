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
4) print those names

research:
start coding:
stuck?
Refactor:
*/

var friends = ["Tilden", "Murphy", "Sam", "Kate", "Sara"];

for (var i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
        console.log(friends[i]);
    }
}
