// Task 1 -- Variables (let vs const)
console.log("Task 1");

const course = "Web Programming";
let students = 30;
students += 5;

console.log(`Course: ${course}`);
console.log(`Total Students: ${students}`);


// Task 2 -- Arrow Functions
console.log("Task 2");

const square = (number) => number * number;

console.log(`square(4) = ${square(4)}`);


// Task 3 -- Template Literals
console.log("Task 3");

let Name = "Alice";
let Age = 21;
let city = "Dallas";

console.log(`My name is ${Name}, I am ${Age} years old, and I live in ${city}`);


// Task 4 -- Array Destructuring
console.log("Task 4");

let fruits = ["Apple", "Banana", "Cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(`firstFruit: ${firstFruit}`);
console.log(`secondFruit: ${secondFruit}`);
console.log(`thirdFruit: ${thirdFruit}`);


// Task 5 -- Object Destructuring
console.log("Task 5");

const student = {
    name: "John",
    major: "Computer Science",
    year: 2
}
let {name, major, year} = student;

console.log(`My name is ${name}, my major is ${major}, and I am in year ${year}`);


// Task 6 -- Spread Operator
console.log("Task 6");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

console.log(`arr3: ${arr3}`);


// Task 7 -- Array Methods (map)
console.log("Task 7");

let numbers = [1, 2, 3, 4];
mappedNumbers = numbers.map(num => num * 3);

console.log(mappedNumbers);


// Task 8 -- Array Methods (filter)
console.log("Task 8");

let numbers2 = [5, 10, 15, 20, 25];
let filteredNumbers = numbers2.filter(num => num > 15);

console.log(filteredNumbers);


// Task 9 -- Array Method (forEach)
console.log("Task 9");

let colors = ["Red", "Green", "Blue"];

colors.forEach(color => {
    console.log(color);
})