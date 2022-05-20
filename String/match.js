// string.match(match)
// Definition and Usage
// The match() method matches a string against a regular expression **

// The match() method returns an array with the matches.

// The match() method returns null if no match is found.
// let text = "The rain in SPAIN stays mainly in the plain";
// text.match("ain");
// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/);
// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/g);
// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/gi);

let str = "We have the awesome trick to make a string well-formed.";
// A search for "we" using a string:
// let matches = str.match("we");
//Output : [
//   'we',
//   index: 13,
//   input: 'We have the awesome trick to make a string well-formed.',
//   groups: undefined
// ];
// A search for "we" using a regular expression:
// let matches = str.match(/we/); //Works same as previous one 
//Output : [
//   'we',
//   index: 13,
//   input: 'We have the awesome trick to make a string well-formed.',
//   groups: undefined
// ];
// A global search for "we" it is case sensitive:
// let matches = str.match(/we/g);
//Output : [ 'we', 'we' ]
// A global, case-insensitive search:
let matches = str.match(/we/gi);
//Output : [ 'We', 'we', 'we' ]
console.log(matches);