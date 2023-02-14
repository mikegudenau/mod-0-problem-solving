
/*
restate the goal: 
Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

consider the data:
- array
- strings
- for loop
- string interpolation
- array method (.sort)

clarifying questions:
break it down:
1) declare a variable named locations and assign it to an array of strings
2) use the array method (.sort) to sort in alphabetical order=
3) use a for loop to iterate through the array
4) push a sentence into the array

research:
start coding:
stuck?
Refactor:
*/

var locations = ["Paris", "Berlin", "Vancouver", "New York", "Delhi"];
locations.sort();

for (var i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}
