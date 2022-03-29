import getAllProducts from './getAllProducts.mjs';

const getMoreProducts = (page) => {
  const buttonLoadMore = document.querySelector('.button-moreproducts');
  buttonLoadMore.onclick = (event) => {
    event.preventDefault();
    page += 1;
    getAllProducts(page);
  };
};

export default getMoreProducts;
