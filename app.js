let input = document.getElementById("input-text");
// console.log(input);

let btns = document.querySelectorAll("button");
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
