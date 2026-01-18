let btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  let inputRow = document.getElementById("romid").value;
  let inputColum = document.getElementById("columid").value;

  let table = document.createElement("table");

  for (let j = 1; j <= inputRow; j++) {
    let row = document.createElement("tr");
    for (let i = 1; i <= inputColum; i++) {
      let cell = document.createElement("td");
      cell.textContent = `Row: ${j} Column: ${i}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  let container = document.getElementById("placetable");
  container.appendChild(table);
});
