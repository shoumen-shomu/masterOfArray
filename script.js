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
color.fill("Black", 2,4);  //2, 4 na dile sob element Black hoye jeto   
console.log(color);
