let personName: string = "eric";

// Upper case
let upperCaseName: string = personName.toUpperCase();
console.log("Upper Case:", upperCaseName);

// Lower case
let lowerCaseName: string = personName.toLowerCase();
console.log("Lower Case:", lowerCaseName);

// Title case
let titleCaseName: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log("Title Case:", titleCaseName);
