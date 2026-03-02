// Call the countries API to fetch all the countries using async/await function called getAllCountries()
// that will display them in the console. Use only capital and population for the fields parameter

// Create async function to filter and get only
// Macedonia from the countries API and display it in the console

// Create a function that gets all the neighbours from a
// country and returns them in console. Again use async/await

let url = "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca3,borders";

async function getAllCountries(apiUrl) {
  let response = await fetch(apiUrl);
  let data = await response.json();
  // console.log(data);

  // data.map((country) => {
  //   console.log(`Capital: ${country.capital[0]}, Population: ${country.population}`);
  // });

  return data;
}

getAllCountries(url);

async function getMaacedonia() {
  let data = await getAllCountries(url);

  let findMkd = data.find((mkd) => mkd.name.common === "North Macedonia");
  // console.log(findMkd);

  console.log(`Capital: ${findMkd.capital[0]}, Population: ${findMkd.population}`);
}

getMaacedonia();

async function neighboursOfMkd() {
  let data = await getAllCountries(url);

  let findNeigMkd = data.find((mkd) => mkd.name.common === "North Macedonia");

  console.log(findNeigMkd.borders);
  let neighbours = data.filter((country) => findNeigMkd.borders.includes(country.cca3));

  neighbours.forEach((element) => {
    console.log(`Cpital: ${element.capital[0]}, Population: ${element.population}`);
  });
}

neighboursOfMkd();
