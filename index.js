console.log("first");

const container = document.querySelector("#container");

function getRandom() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 256; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("squareDiv");
  container.appendChild(squareDiv);

  squareDiv.addEventListener("click", () => {
    squareDiv.style.backgroundColor = getRandom();
  });
}
