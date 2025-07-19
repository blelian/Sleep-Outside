// src/js/product_listing.js

import ProductList from '../productList.mjs';
import ProductData from '../productData.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');
const productListElement = document.querySelector('.product-list');
const searchInput = document.getElementById('search-input');

const dataModel = new ProductData(category);
const listView = new ProductList(category, dataModel, productListElement);

listView.init().then(() => {
  console.log("Products loaded:", listView.products);

  if (!searchInput) {
    console.warn("Search input not found!");
    return;
  }

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log("Searching for:", searchTerm);

    const filteredProducts = listView.products.filter(product => {
      const name = product.Name?.toLowerCase() || "";
      const brand = product.Brand?.Name?.toLowerCase() || "";
      return name.includes(searchTerm) || brand.includes(searchTerm);
    });

    console.log(`Filtered products count: ${filteredProducts.length}`);

    listView.renderList(filteredProducts);
  });
});

// Update page title
const titleElement = document.getElementById('category-title');
if (titleElement && category) {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  titleElement.textContent = `Top Products: ${capitalized}`;
}
