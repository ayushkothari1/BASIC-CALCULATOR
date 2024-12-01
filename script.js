let string = "";
const buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function () {
    console.log("fuck you");
    if (button.textContent === "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
      } catch (error) {
        string = "";
        document.querySelector("input").value = "Invalid expression!";
      }
    } else if (button.textContent === "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string += button.textContent;
      document.querySelector("input").value = string;
    }
  });
});
