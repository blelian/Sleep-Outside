// ProductList.mjs

// Template function to create HTML for each product card
function productCardTemplate(product) {
  return `
    <div class="product-card">
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}" />
      <p>Price: $${product.price}</p>
      <p>${product.description}</p>
    </div>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;          // e.g., 'tents'
    this.dataSource = dataSource;      // an object with getData() method returning products array
    this.listElement = listElement;    // the container element in DOM to render products
  }

  async init() {
    // Fetch product data (await if dataSource.getData is async)
    const allProducts = await this.dataSource.getData();

    // Filter products by category if specified
    this.products = this.category
      ? allProducts.filter(p => p.category === this.category)
      : allProducts;

    // Render the filtered product list
    this.renderList(this.products);
  }

  renderList(list) {
    // Generate HTML for all products and insert into container
    const htmlStrings = list.map(productCardTemplate);
    this.listElement.innerHTML = htmlStrings.join('');
  }
}
