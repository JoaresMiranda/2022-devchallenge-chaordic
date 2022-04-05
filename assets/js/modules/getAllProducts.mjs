import buildCard from './buildCard.mjs';

const product = (productData) => {
  const cardsGroup = document.querySelector('.cards-group');

  return productData.map((products) => {
    const card = buildCard(products);
    return (cardsGroup.innerHTML += card);
  });
};

const getAllProducts = (page = 1) => {
  const requestURL = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`;
  const request = new XMLHttpRequest();

  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    const arrayProducts = request.response;
    product(arrayProducts.products);
  };
};

export default getAllProducts;
