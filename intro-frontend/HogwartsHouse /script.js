//--
const houseNames = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const body = document.body;
const imageFrame = elementGenerator("div", body);
imageFrame.className = "image-frame";

const houseImage = elementGenerator("img", imageFrame);
houseImage.className = "house-image";

const resultText = elementGenerator("p", body);
resultText.className = "paraGraf";

const nameLabel = elementGenerator("label", body);
nameLabel.className = "nameLabel";
nameLabel.setAttribute("for", "nameInput");
nameLabel.textContent = "Your Name : ";

const nameInput = elementGenerator("input", body, "text");
nameInput.className = "name-holder";
nameInput.placeholder = "Write Your Name...";

const sortButton = elementGenerator("button", body, "button");
sortButton.textContent = "Click Here To Sort";
sortButton.className = "click-btn";

function elementGenerator(tag, parent, type) {
  const tagName = document.createElement(tag);
  if (type) {
    tagName.type = type;
  }
  parent.appendChild(tagName);
  return tagName;
}

sortButton.addEventListener("click", () => {
  const randomName = Math.floor(Math.random() * houseNames.length);
  const inputValue = nameInput.value;
  if (inputValue === "") return alert("Fill the field please!");
  resultText.textContent = `${inputValue} belongs in ${houseNames[randomName]}!`;
  houseImage.style.animation = "none";
  houseImage.offsetHeight;
  houseImage.src = `asset/${houseNames[randomName].toLowerCase()}.png`;
  houseImage.onload = () => {
    houseImage.style.animation = "scaleAnime 1s linear forwards";
  };
});
