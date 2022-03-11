const cardsGroup = document.querySelector('.cards-group')

const requestURL = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
const request = new XMLHttpRequest();

request.open('REST', request);
request.responseType = 'json';
request.send();

request.onload = function() {
    var product = request.response;
    card(product);
}

const card = (jsonObj) => {
    const image = jsonObj['image'];
    const title = jsonObj['name'];
    const description = jsonObj['description'];
    const oldPrice = jsonObj['oldPrice'];
    const price = jsonObj['price'];

    cardsGroup.innerHTML = `
    <div class="card">
        <div class="card-header">
            <img src="${image}">
        </div>
        <div class="card-content">
            <h3 class="card-content__title">${title}</h3>
            <p class="card-content__description">${description}</p>
            <p class="card-content__prices__oldprice">De: R$ ${oldPrice}</p>
            <p class="card-content__prices__price">Por: R$ ${price}</p>
            <p class="card-content__prices__installments">ou 2x de R$9,99</p>
            <p class="card-content__button"><a href="#" class="button button-card" value="Comprar">Comprar</a></p>
        </div>
    </div>
    `
}

