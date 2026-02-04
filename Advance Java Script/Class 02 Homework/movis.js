// Movies renting App
// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let movies = ["Inception", "The Matrix", "Titanic", "Avatar", "Gladiator"];

let inputMovis = document.getElementById("input-move");
let btn3 = document.getElementById("btn3");
let resultMovei = document.getElementById("result2");

btn3.addEventListener("click", function () {
  let moveName = inputMovis.value.toLowerCase();
  let found = false;
  for (let movie of movies) {
    if (moveName === movie.toLowerCase()) {
      found = true;
      foundMove = movie;
      break;
    }
  }
  if (found) {
    resultMovei.textContent = `The movie ${foundMove} can be rented`;
    resultMovei.style.color = `green`;
  } else {
    resultMovei.textContent = `The movie ${moveName} can't be rented`;
    resultMovei.style.color = `red`;
  }
});
