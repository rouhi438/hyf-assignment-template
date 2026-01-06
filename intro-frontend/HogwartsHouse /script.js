//--
const houseName = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

function elementGenerator(tag, parent, type) {
  const tagName = document.createElement(tag);
  if (type) {
    tagName.type = type;
  }
  parent.appendChild(tagName);
  return tagName;
}
const body = document.body;
//const div = elementGenerator("div", body);
const img = elementGenerator("img", body);
const paraGraf = elementGenerator("p", body);
const input = elementGenerator("input", body, "text");
const button = elementGenerator("button", body, "button");
button.textContent = "Click here";

button.addEventListener("click", () => {
  const randomName = Math.floor(Math.random() * houseName.length);
  const inputValue = input.value;
  if (inputValue === "") return alert("Fill the field please!");
  paraGraf.textContent = `${inputValue} belongs in ${houseName[randomName]}!`;
  img.style.animation = "none";
  img.offsetHeight;
  img.src = `asset/${houseName[randomName].toLowerCase()}.png`;
  img.onload = () => {
    img.style.animation = "scaleAnime 1s linear forwards";
  };
});
