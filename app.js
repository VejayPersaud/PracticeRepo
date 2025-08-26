//console.log("Hello from app.js!");

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("logButton");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    const message = "Hello from app.js!";
    output.textContent = message; // show on page
    console.log(message);         // still log in console if you want
  });
});