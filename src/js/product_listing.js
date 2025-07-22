import ProductList from '../productList.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const listEl = document.querySelector('.product-list');
const searchInput = document.getElementById('search-input');

function getCategoryFromFilename() {
  const filename = window.location.pathname.split('/').pop(); // e.g. tents.html
  switch (filename) {
    case 'tents.html': return 'tents';
    case 'backpacks.html': return 'backpacks';
    case 'sleeping_bags.html': return 'sleeping-bags';
    case 'hammocks.html': return 'hammocks';
    default: return 'all';
  }
}

const category = getCategoryFromFilename();
const dataUrl = category === 'all' ? '/json/all.json' : `/json/${category}.json`;

class ProductData {
  constructor(url) {
    this.url = url;
  }
  async getData() {
    try {
      const res = await fetch(this.url);
      if (!res.ok) {
        console.warn(`Failed to fetch ${this.url} - status: ${res.status}`);
        return [];
      }
      return await res.json();
    } catch (err) {
      console.error('Fetch error:', err);
      return [];
    }
  }
}

const dataModel = new ProductData(dataUrl);
const listView = new ProductList(category, dataModel, listEl);

listView.init().then(() => {
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const term = e.target.value.toLowerCase();
      const filtered = listView.products.filter(p =>
        (p.Name?.toLowerCase() || '').includes(term) ||
        (p.Brand?.Name?.toLowerCase() || '').includes(term)
      );
      listView.renderList(filtered);
    });
  }
});

const titleEl = document.getElementById('category-title');
if (titleEl) {
  const label = category.charAt(0).toUpperCase() + category.slice(1);
  titleEl.textContent = `Top Products: ${label}`;
}
