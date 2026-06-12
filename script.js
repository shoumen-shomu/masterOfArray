// -   [x] What is an Array in JavaScript?

// An array is a data structure used to store a collection of elements
// (such as numbers, strings, or objects) in a single variable.The elements
//  are stored in an ordered sequence and can be accessed by their index(position).

const mixedArray = [100, "javaScript", {}];

// index => the position of an element in the array is known as its index
// index starts with 0
// index ends eith length -1

//=======================================

// -   [x] How to Create an Array in JavaScript?

const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
const newsalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");

console.log("Salad", salad);
console.log("New Salad", newsalad);

// Constructer Function
// function Car(model){
//     this.model = model
// }
// const bmwCar = new Car ("BMW CAR")
// console.log(bmwCar);

console.log("salad" === "newsalad"); //false because of different memory loaction and reference

// const two = new Array (2)
// console.log(two);  //[empty × 2] atate array create hobe na

const two = new Array(1, 2);
console.log(two); //[1,2]  array create hobe

//===================================

// -   [x] How to Get Elements from an Array in JS?

// const element = array [index]

console.log(salad[1]); //🍄
console.log(salad[2]); //🥦
console.log(salad[5]); //🥕
console.log(salad[9]); //undefinefd

//const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
for (let i = 0; i <= salad.length - 1; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}

// Element at index 0 is 🍅
// Element at index 1 is 🍄
// Element at index 2 is 🥦
// Element at index 3 is 🥒
// Element at index 4 is 🌽
// Element at index 5 is 🥕
// Element at index 6 is 🥑

//push
const push = salad.push("🥜"); // add a elemnet of end of array
console.log(push); //8
console.log(salad); //(8) ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜']

//unshift
const unshift = salad.unshift("🥜"); // add a elemnet of begainning of array
console.log(unshift); //9
console.log(salad); //(9) ['🥜', '🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜']

//pop
const pop = salad.pop(); // remove an elememt of end of an array
console.log(pop); //🥜
console.log(salad); // (8) ['🥜', '🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

//shift

const shift = salad.shift();
console.log(shift); //7
console.log(salad); //(7) ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

//-   [x] Array Destructuring in JavaScript

// const [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
// console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕

// How to Assign a Default Value to a Variable

// const vegetables = ['🍅', '🍄', '🥕']
// const tomato = vegetables[0]
// const mashroom = vegetables[0]
// const carrot = vegetables[0]

// How to Skip a Value in an Array

// const [tomato,,carrot] = ['🍅', '🍄', '🥕']
// console.log(tomato);
// console.log(carrot);

//Nested Array destructuring

//[1,2,[4,[5,6,["a"]]]]

// const fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
// const veg = fruits[4] //['🍅', '🍄', '🥕']
// let carrot = veg[2] //🥕

// fruits[4] [2] //🥕

let [, , , , [, , carrot]] = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];

// How to Use the Rest Parameter and Spread in JS
{
  const [tomato, mushroom, ...rest] = [
    "🍅",
    "🍄",
    "🥦",
    "🥒",
    "🌽",
    "🥕",
    "🥑",
  ]; //Array-এর ক্ষেত্রে Rest Parameter বলতে সাধারণত Array Destructuring-এর সাথে Rest Operator বোঝানো হয়।

  console.log(rest); // ['🥦', '🥒', '🌽', '🥕', '🥑']
  console.log(tomato);

  const mySalad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  const mySaladCopy = [...mySalad];
  console.log(mySaladCopy); //['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

  console.log(mySalad === mySaladCopy); //copy or clone from mySalad bt they are not = beacuse of reference memory

  //-   [x] How to Swap Values with Destructuring?

  let first = "😔";
  let second = "🙂";

  [first, second] = [second, first];
  console.log(first);
  console.log(second);

  //-   [x] How to Merge Arrays?

  const emotions = ["😔", "🙂"];
  const vagies = ["🥦", "🥒", "🌽", "🥕", "🥑"];

  const merge = [...emotions, ...vagies];
  console.log(merge);
}

//-   [X] The length property

const arr1 = [1, 2, 3];
const arr2 = new Array(4);

console.log(arr1.length);
console.log(arr2.length);

//The Array Can hold the element that 2 ** 32 -1

arr1.length = 2;
console.log(arr1); // (2) [1, 2] last element 3 of arr1 is removed automatically

arr1.length = 9;
console.log(arr1); //(9) [1, 2, empty × 7]

//-   [X] JavaScript Array Methods

//Concat()

//concat() হলো JavaScript-এর একটি method, যা array (এবং string-এর ক্ষেত্রেও) একসাথে জোড়া লাগাতে ব্যবহার হয়। এটি মূল array পরিবর্তন করে না; বরং একটি নতুন array রিটার্ন করে।
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];

const concat = first.concat(second, third);
console.log(concat); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

//join()

//join() method array-এর সব element কে একসাথে string হিসেবে join (জোড়া) করে।

const joined = first.join("-");
console.log(joined);
[].join(); //return ""

//fill
//JavaScript-এ fill() method দিয়ে Array-এর সব বা নির্দিষ্ট অংশে একই value বসানো যায়।

const color = ["Red", "Pink", "Green", "Purple"];
color.fill("Black", 2, 4); //2, 4 na dile sob element Black hoye jeto
console.log(color);

//includes
//JavaScript-এর includes() method ব্যবহার করা হয় কোনো array-এর মধ্যে নির্দিষ্ট value আছে কিনা তা চেক করার জন্য।

console.log(color.includes("Blue")); //false  karon color array er moddhe nai
console.log(color.includes("Black")); //true  karon color array er moddhe ache bt jodi black likhle false asto...letter vari kore

//indexof

// indexOf() method কোনো value array-এর কোন index-এ আছে তা খুঁজে বের করে।
console.log(color.indexOf("Red")); //0
console.log(color.indexOf("Black")); //2
console.log(color.indexOf("red")); //-1 array er moddhe element na thakle -1 show korbe
console.log(color.lastIndexOf("Black")); // 3 back theke index hisab korbe

//reverse

//reverse() method একটি array-এর element গুলোকে উল্টো (reverse) করে দেয়।

console.log(color.reverse()); // ['Black', 'Black', 'Pink', 'Red']

//sort

//sort() method array-এর element গুলোকে সাজানোর (sorting) জন্য ব্যবহার করা হয়।
//the default sort() method converts the elements types into string.
// the default sorting order is ascending.

const names = ["tom", "alex", "bob"];
console.log(names.sort());

let artists = [
  "John White Abbott",
  "Leonardo da Vinci",
  "Charles Aubry",
  "Anna Atkins",
  "Barent Avercamp",
];

let sorted = artists.sort();
console.log("Sort the artist names", sorted);

console.log(artists === sorted); //returns true

artists.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});

console.log("Sort the artist name (Desending)", artists);

const ages = [2, 1000, 2, 23, 12, 30, 21];
console.log(ages.sort());
ages.sort().sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});

//splice

//splice(index, deleteCount, item, item1, item2)

const name = ["john", "alex", "bob"];
// console.log(name.splice(0,1, "shoumen"));
// console.log(name);

// name.splice (1,0 ,"Shomu")
// console.log(name); //(4) ['john', 'Shomu', 'alex', 'bob']

name.splice(2, 1, "Shomu");
console.log(name); //(3) ['john', 'alex', 'Shomu']

//at

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.at(0)); // Apple
console.log(fruits.at(1)); // Banana
console.log(fruits.at(-1)); // Mango
console.log(fruits.at(-2)); // Banana

//flat

const array1 = [0, 1, 2, [3, 4]];

console.log(array1.flat());

//Grouping

const employees = [
  { name: "sajal", dept: "Engineering", salary: 4000 },
  { name: "sajib", dept: "Doctor", salary: 6000 },
  { name: "araf", dept: "HR", salary: 7000 },
  { name: "sudipto", dept: "Engineering", salary: 9000 },
  { name: "shuvo", dept: "Engineering", salary: 10000 },
];

const groupByDet = Object.groupBy(employees, ({ dept }) => dept);
console.log(groupByDet);

const groupByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
  return salary >= 5000 ? "More Than 5000" : "Less Than 5000";
});
console.log(groupByMoreThan5000);

//toReversed()

const items = [1, 3, 5, 7, 8];
const reversedItems = items.toReversed();
console.log(reversedItems); //(5) [8, 7, 5, 3, 1]
console.log(items); //(5) [1, 3, 5, 7, 8]

//toSorted()

const month = ["Jan", "Feb", "Mar", "Dec"];
const sortdMonth = month.toSorted() 
console.log(sortdMonth); // (4) ['Dec', 'Feb', 'Jan', 'Mar']
console.log(month);

//toSpliced()

const spliceMonth = month.toSpliced(2,0,"May")
console.log(spliceMonth); //(5) ['Jan', 'Feb', 'May', 'Mar', 'Dec']
console.log(month); //(4) ['Jan', 'Feb', 'Mar', 'Dec']




