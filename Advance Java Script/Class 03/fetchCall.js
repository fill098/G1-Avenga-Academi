let url2 = "https://swapi.py4e.com/api/people/1/";

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
  fetch(url2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      printNames(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function printNames(objdata) {
  let result = document.getElementById("result2");
  result.innerHTML = "";

  let h1Sw = document.createElement("h1");
  h1Sw.textContent = objdata.name;
  result.appendChild(h1Sw);

  result.innerHTML += `
    <table>
      <tr>
        <th>Height</th>
        <td>${objdata.height}</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>${objdata.mass}</td>
      </tr>
      <tr>
        <th>Eye Color</th>
        <td>${objdata.eye_color}</td>
      </tr>
      <tr>
        <th>Hair Color</th>
        <td>${objdata.hair_color}</td>
      </tr>
    </table>
  `;
}
