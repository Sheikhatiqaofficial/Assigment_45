"use strict";
const personName = "Atiqasheikh";
// Lowercase
console.log(personName.toLocaleLowerCase());
// upercase
console.log(personName.toLocaleUpperCase());
// titlecase
let firstletter = personName.charAt(0).toUpperCase();
let restletters = personName.slice(1).toLowerCase();
let titlecase = firstletter + restletters;
console.log(titlecase);
