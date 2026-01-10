console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  // your code goes here

  const productSection = document.querySelector("main");
  productSection.className = "product-section";

  const productList = document.createElement("ul");
  productSection.appendChild(productList);
  productList.className = "product-list";

  for (let product of products) {
    const productItem = createProductLi(product);
    productList.appendChild(productItem);
  }
}

renderProducts(products);

//--

function createProductLi(product) {
  const productItem = document.createElement("li");
  productItem.textContent = `${product.name} - $${product.price} - Rating: ${product.rating}`;
  return productItem;
}
