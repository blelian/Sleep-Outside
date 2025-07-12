// ProductData.mjs

export default class ProductData {
  async getData() {
    // Fetch product data JSON file from your public folder
    const response = await fetch('/json/tents.json');
    const data = await response.json();
    return data.products; // assuming JSON has { "products": [ ... ] }
  }
}
