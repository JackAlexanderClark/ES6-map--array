  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let results = [];
for (let num of nums) {
  results.push(num * 3);
}
console.log(results);

// Using map() will call map on the array itself. Map() expects me to pass through a function which I shall define
const multiplyBy3 = function (num) {
  return num * 3;
}
const mapResults = nums.map(multiplyBy3);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 3});
console.log(simplified);

// Simplfied w/ map() + arrow function. Typically how advanced javaScript is written, less verbose
const simpleArrow = nums.map(nums => nums*3);
console.log(simpleArrow);

// With objects, an array with objects with two properties.
const students = [
  {
    id: 1,
    name: 'jack',
    job: 'builder',
  },
  {
    id: 2,
    name: 'evan',
    job: 'doctor',
  },
  {
    id: 3,
    name: 'hidie',
    job: 'engineer',
  }
];
const studentsWithIds = students.map(students => [student.name, student.id]);
console.log(studentsWithIds);

 