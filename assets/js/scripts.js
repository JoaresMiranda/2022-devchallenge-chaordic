import getAllProducts from './modules/getAllProducts.mjs';
import getMoreProducts from './modules/getMoreProducts.mjs';

let page = 1;

window.onload = () => {
  getAllProducts();
  getMoreProducts(page);
};
