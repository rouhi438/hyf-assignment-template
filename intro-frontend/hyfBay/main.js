console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  // your code goes here
  const main = document.querySelector("main");
  const ul = document.createElement("ul");
  for (let product of products) {
    li = createProductLi(product);
    ul.appendChild(li);
  }
  main.appendChild(ul);
}

renderProducts(products);

//--

function createProductLi(product) {
  const li = document.createElement("li");
  li.textContent = `${product.name} - $${product.price} - Rating: ${product.rating}`;
  return li;
}
