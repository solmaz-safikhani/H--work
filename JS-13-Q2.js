// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function outerFunc() {
    function innerFunc(a, b) {
      return a * b;
    }
    console.log(innerFunc(3, 4));
  }
  outerFunc();