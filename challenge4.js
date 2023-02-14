/*
restate the goal: Start with an array of strings. Print only the words that include the letter combination "ing".

consider the data:
- array
- strings
- for loop 
- conditional
- array method (.includes)

clarifying questions: 
- how do i check to see if a string has "ing" in it?

break it down:
1) declare a variable named randomVerbs and assign it to an array with strings 
2) use a for loop to loop through the array
3) use _______method to check if words inclde "ing"


research: 
-MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
start coding:
stuck?
Refactor:
*/

var randomVerbs = ["talking", "try", "counting", "reach", "coding"];

for (var i = 0; i < randomVerbs.length; i++) {
    if (randomVerbs[i].includes("ing")) {
        console.log(randomVerbs[i]);
    }
}