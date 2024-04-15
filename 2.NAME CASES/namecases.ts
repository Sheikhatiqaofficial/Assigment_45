const personName: string ="Atiqasheikh";

// Lowercase

console.log(personName.toLocaleLowerCase());

// upercase

console.log(personName.toLocaleUpperCase());

// titlecase

let firstletter: string = personName.charAt(0).toUpperCase();

let restletters: string = personName.slice(1).toLowerCase();

let titlecase = firstletter + restletters;

console.log(titlecase);