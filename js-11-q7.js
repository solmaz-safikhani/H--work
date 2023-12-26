// Complete the code below to display "{ method: [Function: method] }" in the console when the method function is executed.
// const myObject = {
//   method() {},
// };
// myObject.method();


const myObject = {
    method(){
      console.log(this);  
    }
  }
  myObject.method();
  