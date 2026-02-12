// 1. Select all the html elements needed for the implemntation
// 2. Implement function to fetch data from API (provide fields what kind of data do we need!)
// 3. Implement function that will display/hide spinner
// 4. Implement function that will display data in Cards
// 5. Implement function that will display data in Table
// 6. Implement 5 event listeners for the five buttons
// 6.1 Search, Reset, All from Europe, All neigbours MKD, MKD
// 7. Implement constructor function with props only needed for the data to be displayed

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");
let resultsContainer = document.getElementById("resultsContainer");

let url =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,capital";

function fetchAllCountries() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (countries) {
      console.log(countries);
      displayCountries(countries);
    })
    .catch(function (error) {
      console.log("Erorr: ", error);
      resultsContainer.innerHTML =
        '<p>class="text-center text-danger">Something went wrong!</p>';
    });
}

searchBtn.addEventListener("click", function () {
  fetchAllCountries();
});

function displayCountries(countries) {
  resultsContainer.innerHTML = "";

  for (let country of countries) {
    let countryName = country.name.common;
    let flag =
      country.flags && country.flags.png
        ? country.flags.png
        : "https://via.placeholder.com/300x200?text=No+Flag";
    let population = country.population.toLocaleString();
    let capital = country.capital ? country.capital[0] : "N/A";
    let wikipediaLink = "https://en.wikipedia.org/wiki/" + countryName;

    let cardHTML = `<div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img src="${flag}" class="card-img-top" alt="${countryName} flag" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${countryName}</h5>
            <p class="card-text">
              <strong>Population:</strong> ${population}<br>
              <strong>Capital:</strong> ${capital}
            </p>
            <a href="${wikipediaLink}" target="_blank" class="btn btn-primary btn-sm">
              Open on Wikipedia
            </a>
          </div>
        </div>
      </div>
    `;

    resultsContainer.innerHTML += cardHTML;
  }
}
