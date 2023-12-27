// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :


const [name1, [firstName2, lastName2], [firstName3, lastName3]] = moreStudents;
console.log(name1, firstName2, lastName2, firstName3, lastName3);