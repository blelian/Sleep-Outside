function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

const apiBase = "https://sleepoutside-api.onrender.com";

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `${apiBase}/products?category=${this.category}`;
  }

  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data.Result); // API returns { Result: [...] }
  }

  async findProductById(id) {
    const url = `${apiBase}/product/${id}`;
    const response = await fetch(url);
    const data = await convertToJson(response);
    return data.Result; // API returns { Result: { product data } }
  }
}
