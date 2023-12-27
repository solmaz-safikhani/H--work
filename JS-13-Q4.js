//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring



// let x = 5; 
// const y = 10;

// const add = (a, b) => a + b;

const name = 'John';
console.log(`Hello, ${name}!`);

const person = { name1: 'Alice', age: 30 };
const { name1, age } = person;
console.log(name1, age);
