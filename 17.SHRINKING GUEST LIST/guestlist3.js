"use strict";
const myFriends = ["Adeel", "Atiqa", "Bushra", "Afifa", "Ayesha", "Umar"];
console.log(`Due to tables inavailability i can only invite two friends\n`);
// remove all last 4 friends:
let friend1 = myFriends.pop();
console.log(`Sorry Mr. ${friend1}, your invitation has been cancalled.`);
let friend2 = myFriends.pop();
console.log(`Sorry Miss. ${friend2}, your invitation has been cancalled.`);
let friend3 = myFriends.pop();
console.log(`Sorry Miss. ${friend3}, your invitation has been cancalled.`);
let friend4 = myFriends.pop();
console.log(`Sorry Miss. ${friend4}, your invitation has been cancalled.`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Dear Mr/Miss. ${myFriends[i]}! you are still invited`);
}
myFriends.pop();
myFriends.pop();
console.log(myFriends);
