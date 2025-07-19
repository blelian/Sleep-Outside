// product_detail.js

import ProductData from "./productData.mjs";

const apiData = new ProductData(); // No category needed for product details

// Get product ID from query params
const params = new URLSearchParams(window.location.search);
const productId = params.get("product");

if (productId) {
  apiData.findProductById(productId).then(renderProductDetails).catch(err => {
    console.error("Product not found", err);
    document.querySelector("main").innerHTML = "<p>Product not found.</p>";
  });
} else {
  document.querySelector("main").innerHTML = "<p>No product selected.</p>";
}

function renderProductDetails(product) {
  document.querySelector(".product-detail__title").innerText = product.Name;
  document.querySelector(".product-detail__brand").innerText = product.Brand.Name;
  document.querySelector(".product-detail__image").src = product.PrimaryLarge;
  document.querySelector(".product-detail__image").alt = product.Name;
  document.querySelector(".product-detail__price").innerText = `$${product.FinalPrice}`;
  document.querySelector(".product-detail__description").innerHTML = product.DescriptionHtmlSimple;
}
