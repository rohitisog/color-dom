const colorName = document.getElementById("colorName");
const createBtn = document.getElementById("createBtn");
const buttonList = document.getElementById("buttonList");
const generateColorBtn = document.getElementById("generateColorBtn");

createBtn.addEventListener("click", () => {
  let color = colorName.value;
  const colorBtn = document.createElement("button");
  colorBtn.style.backgroundColor = color;
  // colorBtn.style.color=w;
  colorBtn.textContent = color;
  buttonList.appendChild(colorBtn);
});

let color = "abcdefghijklmnopqrstuvwxyz1234567890";
let generateColor="";
generateColorBtn.addEventListener("click", () => {
  let randomColor;
  for (let i = 1; i <= 6; i++) {
    randomColor = color[Math.floor(Math.random()*color.length)];
    generateColor += randomColor;
}
console.log(generateColor)

  console.log(randomColor);
  console.log(generateColor);

  // let randomColor=color[Math.floor(Math.random()*color.length)];
  alert(generateColor);
  const colorBtn = document.createElement("button");
  colorBtn.style.backgroundColor = `#${generateColor}`;
  colorBtn.textContent = generateColor;
  buttonList.appendChild(colorBtn);
  generateColor=""
});
