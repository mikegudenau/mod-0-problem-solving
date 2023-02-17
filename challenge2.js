/*
restate the goal: Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

consider the data: 
- array
- strings
- for loop
- string method (toLowerCase)

clarifying questions:

break it down:
1) declare a variable named locations and assign it to an array of strings
2) use a for loop to iterate through the array
3) use a the string method (.toLowerCase) to print all words in lowercase letters

research:
*/

//start coding:

var locations = ["PaRis", "BeRin", "VanCOUver", "NeW YorK", "DelHi"];

for (var i = 0; i < locations.length; i++) {
    console.log(locations[i].toLowerCase());
}


// REFACTORED CODE W/ FUNCTION
var snowLocations = ["JacKSon HOLe", "British ColumBia", "JaPan", "Alaska", "PaRK CiTy"];
var traveledLocations = ["MyanMAr", "LAoS", "ThaILanD", "BerLIN", "Mexico"];

function processArray(params) {
    for (var i = 0; i < params.length; i++) {
        console.log(params[i].toLowerCase());
    }
}

processArray(snowLocations);
processArray(traveledLocations);
