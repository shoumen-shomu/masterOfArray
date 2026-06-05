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
  const newsalad = new Array ("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑")

  console.log("Salad" ,salad);
  console.log("New Salad" ,newsalad);



// Constructer Function
// function Car(model){
//     this.model = model
// }
// const bmwCar = new Car ("BMW CAR")
// console.log(bmwCar);

console.log("salad" ==="newsalad"); //false because of different memory loaction and reference 

// const two = new Array (2)
// console.log(two);  //[empty × 2] atate array create hobe na

const two = new Array (1,2)
console.log(two);  //[1,2]  array create hobe 


//===================================

// -   [x] How to Get Elements from an Array in JS?

// const element = array [index]

console.log(salad[1]); //🍄
console.log(salad[2]); //🥦
console.log(salad[5]); //🥕











