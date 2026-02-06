let url =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json";

let btn = $("#btn");

btn.on("click", function () {
  $.ajax({
    url: url,
    success: function (data) {
      let dataObject = JSON.parse(data);
      console.log(dataObject);
      namesPrint(dataObject);
    },
    error: function (error) {
      console.log(error);
    },
  });
});

function namesPrint(urlData) {
  let resulteData = document.getElementById("result");
  resulteData.innerHTML = "";

  let h1 = document.createElement("h1");
  h1.textContent = `Name of Academy: ${urlData.academy}`;
  resulteData.appendChild(h1);

  let ul = document.createElement("ul");

  for (let student of urlData.students) {
    let li = document.createElement("li");
    li.textContent = student;
    ul.appendChild(li);
  }
  resulteData.appendChild(ul);
}
