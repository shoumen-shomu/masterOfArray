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
console.log(salad[9]); //undefinefd


//const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
for (let i=0 ;i <=salad.length-1 ; i++){
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
const push = salad.push("🥜")  // add a elemnet of end of array
console.log(push); //8
console.log(salad); //(8) ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜']

//unshift
const unshift = salad.unshift('🥜')  // add a elemnet of begainning of array
console.log(unshift); //9
console.log(salad); //(9) ['🥜', '🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜']


//pop
const pop = salad.pop ()  // remove an elememt of end of an array
console.log(pop);  //🥜
console.log(salad); // (8) ['🥜', '🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
 
//shift

const shift = salad.shift()
console.log(shift); //7
console.log(salad); //(7) ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']



//-   [x] Array Destructuring in JavaScript


  // const [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
  // console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕

  // const vegetables = ['🍅', '🍄', '🥕']
  // const tomato = vegetables[0]
  // const mashroom = vegetables[0]
  // const carrot = vegetables[0]

  const [tomato,,carrot] = ['🍅', '🍄', '🥕']
  console.log(tomato);
  console.log(carrot);
  












