export default class ProductData {
  constructor(category) {
    this.category = category;
  }

  async getData() {
    // Load the JSON file based on the category parameter
    const response = await fetch(`/json/${this.category}.json`);

    // Convert the response to JSON format
    const data = await response.json();

    // Return the product list stored in the "Result" key of the JSON
    return data.Result;
  }
}
