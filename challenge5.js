
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
2) use the array method (.sort) to sort in alphabetical order
3) use a for loop to iterate through the locations array. 
4) push a string a string into an empty array and include the string interpolaiton with ${locations}. print string 
5) loop through the updated locationSentence array and print. 

research: i remembered this type of problem from a coding workshop I did a month prior to starting Turing. I took a look and found a similar solution. 
*/

// start coding:

var locations = ["Paris", "Berlin", "Vancouver", "New York", "Delhi"];
locations.sort();
var locationSentence = []

for (var i = 0; i < locations.length; i++) {
    locationSentence.push(`I cant wait to travel to ${locations[i]}!`);
}

// console.log(locationSentence[i]); // this did not have the proper formatting identified in in stuck above.

for (let i = 0; i < locationSentence.length; i++) {
    console.log(locationSentence[i]);
  }

// stuck?
// I was having an issue with the code printing with quotation marks and commas (stuck on end of step 4)
//  'I cant wait to travel to Berlin !',
//   'I cant wait to travel to Delhi !',
//   'I cant wait to travel to New York !',
//   'I cant wait to travel to Paris !',
//   'I cant wait to travel to Vancouver !'



// REFACTORED CODE W/ FUNCTION

var snowLocations = ["Jackson Hold", "British Columbia", "Japan", "Alaska", "Park City"];
var traveledLocations = ["Myanmar", "Laos", "Thailand", "Berlin", "Mexico"];

function processArray(locations) {
  locations.sort;
  var locationSentence = [];
  for (var i = 0; i < locations.length; i++) {
      locationSentence.push(`I cant wait to travel to ${locations[i]}!`);
  }
  for (let i = 0; i < locationSentence.length; i++) {
    console.log(locationSentence[i]);
  }
}

processArray(snowLocations);
processArray(traveledLocations);


