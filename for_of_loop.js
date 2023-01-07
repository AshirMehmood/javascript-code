const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// object within object

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const entries = Object.entries(openingHours);
console.log(entries);
// looping over object

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
