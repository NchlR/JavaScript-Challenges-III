// Show Rating
// function showRating(rating) {
// let ratings = "";
// for (let i = 0; i < 4; ++i) {
// iteration breaks at 4
// if (i === 3) {
// ratings = ratings + "*"
// }
// else {
// ratings = ratings + "* "
// }
// always add a star
// ratings = ratings + "*"
// if (i !== rating - 1) {
// if it's not the final iteration then add a " "
// ratings = ratings + " "
// }
// }
// return ratings
// }

// initialize an empty string

// loop through the rounded down rating
// add a star fpr every iterationg
// if it's not the last iteration add a space
// if the number is not an integer
// add a full stop
// return it

function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    // ratings = ratings + "*" is the same as
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}
console.log(showRating(4.5));

//====================================================

// Sort by lowest to highest price
function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b);
  // Sorting sorts alphabetically
  // To sort numbers use ((a, b) => a - b) low to high
  // high to low is ((a, b) => b - a)
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

//====================================================

// Sort by highest to lowest price
function sortHighToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
    { id: 4, price: 5000 },
  ])
);

//====================================================

// Promises
// Find all the posts by a single user

async function postByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
// We are getting the promise from the fetch API
  const result = await promise.json();
// We are converting the backend to frontend (convert to json)
  const posts = result.filter(element => element.userId === userId);
// We have the result. Now we use the filter method.
// The filter looks through every element in our current iteration if 
// the userId === the Id entered in, it will return true
  console.log(posts);
}

postByUser(4);

//====================================================

// First 6 Incomplete Todos
async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json();

    const incompleteTasks = result.filter(elem => !elem.comepleted).slice(0, 6);

    console.log(incompleteTasks);
}

firstSixIncomplete(6)
