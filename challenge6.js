/*
restate the goal: Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. 
For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

consider the data: 
- string 
- string method .split & .substring
- array


clarifying questions:
- how do I identify the first letter of each word and capitalize

break it down:
1) declare a variable named randomSentence and assign it to a string in all lower case
2) declare a variable named words and use the .split method => this returns an array
3) loop over the array and capitalize the first letter of each word 
4) use the substring method 
4) join the words into one string


research: 
- https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
start coding:
stuck?
Refactor:
*/


var randomSentence = "i love to code";
const words = randomSentence.split(" ");
// console.log(words); // this returns an array => [ 'i', 'love', 'to', 'code' ]

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

console.log(words.join(" "));

