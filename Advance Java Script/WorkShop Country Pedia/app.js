// 1. Select all the html elements needed for the implemntation
// 2. Implement function to fetch data from API (provide fields what kind of data do we need!)
// 3. Implement function that will display/hide spinner
// 4. Implement function that will display data in Cards
// 5. Implement function that will display data in Table
// 6. Implement 5 event listeners for the five buttons
// 6.1 Search, Reset, All from Europe, All neigbours MKD, MKD
// 7. Implement constructor function with props only needed for the data to be displayed

const url = "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca3,borders";

const baseUrl = "https://restcountries.com/v3.1";

let allCountries = [];

let html = {
  searchInput: document.getElementById("inpSearch"),
  searchBtn: document.getElementById("btnSearch"),
  resetBtn: document.getElementById("btnReset"),
  europeBtn: document.getElementById("btnAllInEurope"),
  neighboursBtn: document.getElementById("btnNeighbours"),
  macedoniaBtn: document.getElementById("btnMacedonia"),
  spinner: document.getElementById("spinner"),
  resultsContainer: document.getElementById("resultsContainer"),
};

function Country(name, flag, population, capital, wikipedia, description, region, code, borders) {
  this.name = name;
  this.flag = flag;
  this.population = population;
  this.capital = capital;
  this.wikipedia = wikipedia;
  this.description = description;
  this.region = region;
  this.code = code;
  this.borders = borders;
}

function toggleSpinner(showSpinner) {
  if (showSpinner) {
    html.spinner.classList.remove("d-none");
  } else {
    html.spinner.classList.add("d-none");
  }
  // Or we can simply use toggle();
  // html.spinner.classList.toggle("d-none");
}

async function getData(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("Somtinig went wrong with fetching the data!");
  }

  let data = await response.json();
  return data;
}

function createCountryObjects(data) {
  return data.map((countryData) => {
    let name = countryData.name.common;
    let flag = countryData.flags?.png || "https://via.placeholder.com/300x200?text=No+Flag";
    let population = countryData.population.toLocaleString();
    let capital = countryData.capital ? countryData.capital[0] : "N/A";
    let wikipedia = "https://en.wikipedia.org/wiki/" + name;
    let description = countryData.flags?.alt || "N/A";
    let region = countryData.region || "N/A";
    let code = countryData.cca3;
    let borders = countryData.borders || [];
    return new Country(name, flag, population, capital, wikipedia, description, region, code, borders);
  });
}

function createCard(country) {
  return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${country.flag}" class="card-img-top" alt="${country.name} flag" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${country.name}</h5>
                    <p class="card-text flex-grow-1">
                        <strong>Population:</strong> ${country.population}<br>
                        <strong>Capital:</strong> ${country.capital}<br>
                        <strong>Description:</strong> ${country.description}
                    </p>
                    <a href="${country.wikipedia}" target="_blank" class="btn btn-primary btn-sm mt-auto">
                        Open on Wikipedia
                    </a>
                </div>
            </div>
        </div>
    `;
}

function displayCountries(countries) {
  html.resultsContainer.innerHTML = "";
  countries.forEach((country) => {
    html.resultsContainer.innerHTML += createCard(country);
  });
}

function displayError(message) {
  html.resultsContainer.innerHTML = `<p class="text-center text-danger">${message}</p>`;
}

function searchCountrys(searchTerm) {
  if (searchTerm === "") {
    alert("Please enter a country name!");
    return;
  }

  let result = allCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (result.length === 0) {
    displayError("Country not found! Please try another name.");
    return;
  }

  displayCountries(result);
}

function getMacedonia() {
  let macedonia = allCountries.find((mkd) => mkd.name === "North Macedonia");
  if (!macedonia) {
    displayError("Macedonia not found!");
    return;
  }

  displayCountries([macedonia]);
}

async function getEurope(baseUrl) {
  try {
    toggleSpinner(true);

    let data = await getData(
      `${baseUrl}/region/europe?fields=name,flags,population,capital,region,cca3,borders`,
    );

    let countries = createCountryObjects(data);

    displayCountries(countries);
  } catch (error) {
    displayError("Colud not find counrtys in Europe");
  } finally {
    toggleSpinner(false);
  }
}

async function getNeighborsOfMKD(baseUrl) {
  try {
    toggleSpinner(true);
    let dataMKD = await getData(`${baseUrl}/alpha/MKD`);
    let borders = dataMKD[0].borders;

    if (!borders || borders.length === 0) {
      displayError('"No neighboring countries found.');
      return;
    }

    let bordersCode = borders.join(",");
    let neigboursData = await getData(
      `${baseUrl}/alpha?codes=${bordersCode}&fields=name,flags,population,capital,region,cca3,borders`,
    );

    let countries = createCountryObjects(neigboursData);

    displayCountries(countries);
  } catch (error) {
    displayError("Could not find neighbor of North Macedonia");
  } finally {
    toggleSpinner(false);
  }
}

html.searchBtn.addEventListener("click", function () {
  searchCountrys(html.searchInput.value.trim());
});

html.searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchCountrys(html.searchInput.value.trim());
  }
});

html.macedoniaBtn.addEventListener("click", function () {
  getMacedonia();
});

html.europeBtn.addEventListener("click", () => {
  getEurope(baseUrl);
});

html.neighboursBtn.addEventListener("click", () => {
  getNeighborsOfMKD(baseUrl);
});

html.resetBtn.addEventListener("click", () => {
  html.searchInput.value = "";
  displayCountries(allCountries);
});

async function fetchAllCountries(url) {
  try {
    toggleSpinner(true);
    let data = await getData(url);
    allCountries = createCountryObjects(data);
    displayCountries(allCountries);
  } catch (err) {
    displayError("Could not load countries!");
    console.log(err);
  } finally {
    toggleSpinner(false);
  }
}

fetchAllCountries(url);
