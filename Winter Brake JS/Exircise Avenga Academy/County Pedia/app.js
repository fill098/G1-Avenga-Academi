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

let europeBtn = document.getElementById("europeBtn");
let mkdNeighbordBtn = document.getElementById("macedoniaNeighborsBtn");
let getMkdBtn = document.getElementById("macedoniaBtn");

function Country(name, flag, population, capital, wikipedia, description) {
  this.name = name;
  this.flag = flag;
  this.population = population;
  this.capital = capital;
  this.wikipedia = wikipedia;
  this.description = description;
}

function fetchAllCountries() {
  let url = "https://restcountries.com/v3.1/all?fields=name,flags,population,capital";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Data received from API:", data);
      let countries = createCountryObjets(data);
      displayCountries(countries);
    })
    .catch(function (error) {
      console.log("Erorr: ", error);
      resultsContainer.innerHTML =
        '<p class="text-center text-danger">Something went wrong!</p>';
    });
}

function createCountryObjets(data) {
  let countryDataObj = [];

  for (let countryData of data) {
    let name = countryData.name.common;
    let flag =
      countryData.flags && countryData.flags.png
        ? countryData.flags.png
        : "https://via.placeholder.com/300x200?text=No+Flag";
    let population = countryData.population.toLocaleString();
    let capital = countryData.capital ? countryData.capital[0] : "N/A";
    let wikipedia = "https://en.wikipedia.org/wiki/" + name;
    let description =
      countryData.flags && countryData.flags.alt ? countryData.flags.alt : "N/A";
    let country = new Country(name, flag, population, capital, wikipedia, description);

    countryDataObj.push(country);
  }
  console.log("Objectss from costructor ", countryDataObj);
  return countryDataObj;
}

function displayCountries(countries) {
  resultsContainer.innerHTML = "";

  for (let country of countries) {
    let cardHTML = `<div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img src="${country.flag}" class="card-img-top" alt="${country.name} flag" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${country.name}</h5>
            <p class="card-text">
              <strong>Population:</strong> ${country.population}
              <br>
              <strong>Capital:</strong> ${country.capital}
              <br>
              <strong>Discription:</strong> ${country.description}
            </p>
            <a href="${country.wikipedia}" target="_blank" class="btn btn-primary btn-sm">
              Open on Wikipedia
            </a>
          </div>
        </div>
      </div>
    `;

    resultsContainer.innerHTML += cardHTML;
  }
}

function searchCountries() {
  let searchTerm = searchInput.value.trim();

  if (searchTerm === "") {
    alert("Pleass enter a country name!");
    return;
  }

  let url = `https://restcountries.com/v3.1/name/${searchTerm}?fields=name,flags,population,capital`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Country not found");
      }
      return response.json();
    })
    .then(function (data) {
      console.log("Search result: ", data);
      let countries = createCountryObjets(data);
      displayCountries(countries);
    })
    .catch(function (error) {
      console.log("Error", error);
      resultsContainer.innerHTML =
        '<p class="text-center text-danger">Country not found! Please try another name.</p>';
    });
}
function getEurope() {
  let url = `https://restcountries.com/v3.1/region/europe?fields=name,flags,population,capital`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Europe countrys not found");
      }
      return response.json();
    })
    .then(function (data) {
      console.log("Search result: ", data);
      let countries = createCountryObjets(data);
      displayCountries(countries);
    })
    .catch(function (error) {
      console.log("Error", error);
      resultsContainer.innerHTML =
        '<p class="text-center text-danger">Europe countrys not found</p>';
    });
}

function getMacedonia() {
  let url = `https://restcountries.com/v3.1/alpha/MKD`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Macedonia country not found");
      }
      return response.json();
    })
    .then(function (data) {
      console.log("Search result: ", data);
      let countries = createCountryObjets(data);
      displayCountries(countries);
    })
    .catch(function (error) {
      console.log("Error", error);
      resultsContainer.innerHTML =
        '<p class="text-center text-danger">Macedonia country not found</p>';
    });
}

function neigboursOfMKd() {
  let url = `https://restcountries.com/v3.1/alpha/MKD`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Neigbours of Macedonia country not found");
      }
      return response.json();
    })
    .then(function (data) {
      console.log("Search result: ", data);
      let borders = data[0].borders;
      if (!borders || borders.length === 0) {
        resultsContainer.innerHTML = `<p class="text-center text-warning">No neighboring countries found.</p>`;
        return;
      }

      let borderCodes = borders.join(",");
      let neigborsUrl = `https://restcountries.com/v3.1/alpha?codes=${borderCodes}&fields=name,flags,population,capital`;

      return fetch(neigborsUrl);
    })
    .then(function (response) {
      if (!response) return;
      return response.json();
    })
    .then(function (neigbourData) {
      if (!neigbourData) return;
      console.log("Neighbor countries data: ", neigbourData);
      let countries = createCountryObjets(neigbourData);
      displayCountries(countries);
    })
    .catch(function (error) {
      console.log("Error", error);
      resultsContainer.innerHTML =
        '<p class="text-center text-danger">Neigbours of Macedonia country not found</p>';
    });
}

searchBtn.addEventListener("click", function () {
  searchCountries();
});

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchCountries();
  }
});

europeBtn.addEventListener("click", function () {
  getEurope();
});

getMkdBtn.addEventListener("click", function () {
  getMacedonia();
});

mkdNeighbordBtn.addEventListener("click", function () {
  neigboursOfMKd();
});

fetchAllCountries();
