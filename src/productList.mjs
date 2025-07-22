// src/productList.mjs

// Template function to create HTML for each product card
function productCardTemplate(product) {
  const imageUrl =
    product.Images?.[0]?.PrimaryMedium ||
    product.Images?.[0]?.PrimaryLarge ||
    product.Images?.[0] ||
    '/images/fallback.jpg'; // Use absolute path from /public

  const altText = product.Name || 'Outdoor product';

  return `
    <li class="product-card">
      <a href="/product_pages/index.html?product=${product.Id}">
        <img src="${imageUrl}" alt="${altText}" loading="lazy" />
        <h3 class="card__brand">${product.Brand?.Name || 'Brand'}</h3>
        <h2 class="card__name">${product.Name || 'Product Name'}</h2>
        <p class="product-card__price">$${product.FinalPrice ?? 'N/A'}</p>
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
    try {
      this.products = await this.dataSource.getData();
      this.renderList(this.products);
    } catch (error) {
      console.error('Error loading products:', error);
      this.listElement.innerHTML = `<p class="error">Failed to load products. Please try again later.</p>`;
    }
  }

  renderList(list) {
    if (!Array.isArray(list) || list.length === 0) {
      this.listElement.innerHTML = `<p class="no-results">No products found.</p>`;
      return;
    }

    const htmlStrings = list.map(productCardTemplate);
    this.listElement.innerHTML = htmlStrings.join('');
  }
}
