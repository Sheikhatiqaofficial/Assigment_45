const myFriends: string [] = ["Afifa", "Ayesha", "Umar"];
console.log(myFriends);

console.log(`I want to invite 3 more friends because i found bigger dinner table\n`)

// ADDING THREE MORE FRIENDS:

// adding at beggining:
myFriends.unshift("Bushra");
// ["Bushra", Afifa", "Ayesha", "Umar"]
console.log(myFriends);

// adding at middle:
myFriends.splice(2, 0, "Adeel")
console.log(myFriends);

// adding at end:
myFriends.push("Atiqa");
console.log(myFriends);
// print all friends along with message:
for(let i = 0; i < myFriends.length; i++){
console.log(`Mr/Miss. ${myFriends[i]}! you are invited for dinner at my villa.`);

}