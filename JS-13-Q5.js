//? You have an object with a string property. Implement a method named counterString for the object that performs the following tasks:
//todo1: Convert the received string into an array based on spaces.
//todo2: Calculate the length of each element in the array.
//todo3: Return a new array containing the lengths of the elements.

// const obj = {
//   string: "Hello world how are you?",
//   write code here
// }

// note: obj.counterString("Hello world how are you?")==>[ 5, 5, 3, 3, 4 ]

// !Answer:

const obj = {
    string: "Hello world how are you?",
    counterString: function () {
      const words = this.string.split(' ');
      const lengths = words.map(word => word.length);
      return lengths;
    }
};
console.log(obj.counterString());