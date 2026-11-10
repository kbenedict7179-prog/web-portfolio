// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", function() {
console.log("Portfolio script loaded successfully!");

// Interactive greeting when clicking the main header title
const headerTitle = document.querySelector("header h1");
if (headerTitle) {
headerTitle.addEventListener("click", function() {
alert("Thanks for visiting my portfolio!");
});
}
});