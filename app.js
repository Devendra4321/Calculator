let input = document.getElementById("input-text");
// console.log(input);

let btns = document.querySelectorAll(".btn");
let string = "";

for (btn of btns) {
  btn.addEventListener("click", function (e) {
    // console.log("btn clicked");
    if (e.target.innerText == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerText == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerText == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerText;
      input.value = string;
    }
  });
}

//light mode
let modeBtn = document.querySelector(".mode");
modeBtn.addEventListener("click", function () {
  modeBtn.classList.toggle("white-mode");
  document.querySelector(".calculator").classList.toggle("main-container-mode");
  document.querySelector("input").classList.toggle("input-mode");
  for (btn of btns) {
    btn.classList.toggle("btn-mode");
  }
  let operatorBtns = document.querySelectorAll(".operator");
  for (operatorBtn of operatorBtns) {
    operatorBtn.classList.toggle("operator-mode");
  }
});
