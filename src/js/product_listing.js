// product_listing.js

import ProductList from './product.js';
import ProductData from '../productData.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category'); // Get category from URL
const productListElement = document.querySelector('.product-list');

// Create an instance of ProductData (class names should start with capital letters)
const dataModel = new ProductData(category);

// Create an instance of ProductList
const listView = new ProductList(category, dataModel, productListElement);
listView.init();

// Optional: Update page title dynamically
const titleElement = document.getElementById('category-title');
if (titleElement && category) {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  titleElement.textContent = `Top Products: ${capitalized}`;
}
