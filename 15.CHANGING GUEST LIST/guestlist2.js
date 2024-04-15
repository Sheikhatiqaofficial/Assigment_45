"use strict";
const myFriends = ["Afifa", "Ayesha", "Umar"];
console.log(`due to some personal reason Miss. ${myFriends[1]} will not join us at my dinner`);
myFriends[1] = "Bushra";
console.log(`:MODIFIED LIST:`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`${i}. ${myFriends[i]}`);
}
