document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("content");
  let userInput = "";

  document.addEventListener("keydown", function (event) {
    userInput += event.key.toLowerCase();

    if (userInput === "light") {
      overlay.style.transition = "opacity 5s ease";
      overlay.style.opacity = 0;
      // Reset userInput after successful reveal
      userInput = "";
    } else {
      // If the entered sequence is not 'light', reset after 5 seconds
      setTimeout(function () {
        userInput = "";
      }, 5000);
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("content");
  let userInput = "";

  document.addEventListener("keydown", function (event) {
    userInput += event.key.toLowerCase();

    if (userInput === "dark") {
      overlay.style.transition = "opacity 5s ease";
      overlay.style.opacity = 1;
      // Reset userInput after successful reveal
      userInput = "";
    } else {
      // If the entered sequence is not 'light', reset after 5 seconds
      setTimeout(function () {
        userInput = "";
      }, 5000);
    }
  });
});

document.body.style.textTransform = "lowercase";
