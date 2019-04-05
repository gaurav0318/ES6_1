/* Compare 2 objects to determine if the first one contains equivalent 
property values to the second one */


const matches = (obj, source) =>
	Object.keys(source).every(key => obj.hasOwnProperty(key) && 
obj[key] === source [key]);
console.log(matches({ age: 25, hair : 'short', beard: false}, { hair : 'long' , beard: true}));

console.log(matches({ hair: 'long', beard: true}, { age: 26, hair: 'long', beard: true}));



