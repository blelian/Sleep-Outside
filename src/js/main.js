// main.js
import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs';

const productListElement = document.querySelector('#product-list'); // container in your HTML
const productData = new ProductData();

const productList = new ProductList('tents', productData, productListElement);
productList.init();
