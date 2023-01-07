const arr=[7,8,5];
//spread operator
const newarr=[1,2,3,...arr];
console.log(newarr);
let products={
    item1: "mobile",
    item2: "earphones",
    item3: "stationery",
    prices: [100,20,15]
};
let obj2={...products,
item4: "chargers"
};
console.log(obj2);