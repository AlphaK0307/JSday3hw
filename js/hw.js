// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended

function createAdder(x){

    return function (y) {
      return x + y;
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



// Exercise 2 - Promises 
// Using either .then().catch() or Async/Await, create an asynchronous function that accepts 
// a movie title and then either displays the movie information or logs an error.

function getMovieInfo(movieName){
  return new Promise((resolve, reject) => {
      if (movieName.length > 5){
          let movie = {
              id: 123,
              title: movieName,
              director: 'Christopher Spielberg',
              runtime: 157,
              description: 'Good vs Evil'
          }
          resolve(movie)
      } else {
          reject(`${movieName} cannot be accessed because it is too short.`)
      }
  })
}