// HOMEWORK Part 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let pTags = document.getElementsByTagName("p");

for (key of pTags) {
  key.textContent = "Change Text pTags";
}

let hTags = document.querySelectorAll("h1, h3");

for (key of hTags) {
  key.textContent = "Change content for hTags";
}
