const airline = "tap air portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log("B737".length);
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // starts from 4th index and stops at 7th
// starts from that string, does not change underlying string
//strings themselves are immutable
console.log(airline.slice(0, airline.indexOf(" ")));
const check_seat = function (seat) {
  const s = seat.slice(-1); //checks last character
  if (s === "B" || s === "E") console.log("You got middle seat");
  else console.log("you got lucky");
};
check_seat("11B");
check_seat("23C");
check_seat("3E");
console.log(new String("jonas"));
let Name = "Harry";
console.log(Name.replace("Har", "per"));
const sentence = "The quick brown fox jump over the lazy dog";
let word = "fox";
console.log(sentence.includes("fox2"));
console.log(
  `the word "${word}" ${
    sentence.includes(word) ? "is " : " is not"
  } in the sentence`
);
let str = "please give rs 1000";
console.log(str.slice("please give rs".length));
// change 4th character
let friend = "alan";
friend[3] = "R"; // friend is not changed because string is immutable
console.log(friend);
