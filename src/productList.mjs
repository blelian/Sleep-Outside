// ProductList.mjs

// Template function to create HTML for each product card
function productCardTemplate(product) {
  const imageUrl =
    product.Images[0]?.PrimaryMedium ||
    product.Images[0]?.PrimaryLarge ||
    product.Images[0] ||
    'fallback.jpg'; // Optional fallback image if nothing else is available

  return `
    <li class="product-card">
      <a href="../product_pages/index.html?product=${product.Id}">
        <img src="${imageUrl}" alt="${product.Name}" />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // Get products directly from API (already filtered by category)
    this.products = await this.dataSource.getData();
    this.renderList(this.products);
  }

  renderList(list) {
    const htmlStrings = list.map(productCardTemplate);
    this.listElement.innerHTML = htmlStrings.join("");
  }
}
