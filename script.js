const container = document.querySelector("#container");
function generateGrid(value) {
  let pixelSize = "25";
  let bgColor = "white";
  pixelSize = `${Math.ceil(400 / Math.sqrt(value))}px`;
  const fragment = document.createDocumentFragment();
  for (let pixelNum = 0; pixelNum < value; pixelNum++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.id = pixelNum;
    pixel.style.backgroundColor = bgColor;
    pixel.style.width = pixelSize;
    pixel.style.height = pixelSize;
    fragment.appendChild(pixel);
  }
  container.appendChild(fragment);
}
generateGrid(256);
function eraseGrid(elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = "";
}
container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("pixel")) {
    if (eraser === "off") {
      event.target.style.backgroundColor = "white";
    } else if (eraser === "on") {
      event.target.style.backgroundColor = "black";
      if (rainbow === "on") {
        let randomColorNumber = Math.floor(Math.random() * (6 - 0 + 1));
        let newColor;
        switch (randomColorNumber) {
          case 0:
            newColor = "red";
            break;
          case 1:
            newColor = "orange";
            break;
          case 2:
            newColor = "yellow";
            break;
          case 3:
            newColor = "green";
            break;
          case 4:
            newColor = "blue";
            break;
          case 5:
            newColor = "indigo";
            break;
          case 6:
            newColor = "violet";
            break;
          default:
            newColor = "black";
        }
        event.target.style.backgroundColor = newColor;
      }
    }
  }
});
const eraserButton = document.getElementById("eraser");
let eraser = "on";
eraserButton.innerText = "Eraser (off)";
eraserButton.addEventListener("click", (event) => {
  if (eraser === "on") {
    eraser = "off";
    eraserButton.innerText = "Eraser (on)";
  } else {
    eraser = "on";
    eraserButton.innerText = "Eraser (off)";
  }
});
const rainbowButton = document.getElementById("rainbow");
let rainbow = "off";
rainbowButton.innerText = "Rainbow (off)";
rainbowButton.addEventListener("click", (event) => {
  if (rainbow === "off") {
    rainbow = "on";
    rainbowButton.innerText = "Rainbow (off)";
  } else {
    rainbow = "off";
    rainbowButton.innerText = "Rainbow (on)";
  }
});
function getSizeValue() {
  let numberValue = 256;
  const userInput = prompt("Enter a number:");
  if (userInput > 10000) {
    alert("Please enter a number smaller than 10 000");
    exit;
  }
  numberValue = parseInt(userInput);
  if (!isNaN(numberValue)) {
    eraseGrid("container");
    generateGrid(numberValue);
    return numberValue;
  } else {
    alert("Please enter a valid number.");
  }
}
const sizeButton = document.getElementById("dimension");
sizeButton.addEventListener("mousedown", getSizeValue);
