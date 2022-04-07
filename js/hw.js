// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended

function createAdder(number1){

    return function (number2) {
      return number1 + number2;
    };

}
let addEight = createAdder(8);
console.log(addEight(10)); 
console.log(addEight(17)); 
console.log(addEight(50)); 
console.log(addEight(100)); 
console.log(addEight(92));

const addThree = createAdder(3);
console.log(addThree(10)); 
console.log(addThree(17)); 
console.log(addThree(50));
console.log(addThree(100)); 
console.log(addThree(92)); 