let btns = document.getElementsByClassName("btn");
console.log(btns);

document.getElementById("img").unload = function (event) {
  console.log(event, "img loaded ");
};
for (btn of btns) {
  btn.addEventListener("click", btnHandler);
}

function btnHandler(e) {
  console.log(e, "eee, bnt click");
  e.stopPropagation();
  //   document.getElementById("img").remove();
}

function submitHandler(event) {
  event.preventDefault();
  console.log(event, "form submitted");
}

let cards = document.getElementsByClassName("card");

for (let card of cards) {
  card.onclick = function (event) {
    console.log(event, "card click");
  };
}

[("keydown", "keypress", "keyup")].forEach((item) => {
  document.getElementById("name").addEventListener(item, inputHandler);
});

function inputHandler(event) {
  document.getElementById("content").innerText = event.target.value;
  console.log(event, "input changed");
}

document.getElementById("clear").onclick = function () {
  document.getElementById("content").innerText = null;
};

document.getElementById("ink").onclick = function (e) {
  e.preventDefault();
  console.log(e, "link clicked");
};
