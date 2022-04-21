import buildCard from './buildCard.mjs';

const product = (productData) => {
  const cardsGroup = document.querySelector('.cards-group');

  return productData.map((products) => {
    const card = buildCard(products);
    return (cardsGroup.innerHTML += card);
  });
};

const getAllProducts = (page = 1) => {
  fetch(
    `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`
  )
    .then((res) => res.json())
    .then((data) => product(data.products));
};

export default getAllProducts;
