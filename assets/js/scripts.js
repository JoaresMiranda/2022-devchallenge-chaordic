const cardsGroup = document.querySelector('.cards-group')

const requestURL = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const productList = request.response;
    console.log(productList.products[0].installments.count)
    cards(productList);
}

const cards = (item) => {
    const items = item.products.map(product => {
        const card = `
            <div class="card">
                <div class="card-header">
                    <img src="http:${product.image}">
                </div>
                <div class="card-content">
                    <h3 class="card-content__title">${product.name}</h3>
                    <p class="card-content__description">${product.description}</p>
                    <p class="card-content__prices__oldprice">De: R$ ${product.oldPrice}</p>
                    <p class="card-content__prices__price">Por: R$ ${product.price}</p>
                    <p class="card-content__prices__installments">ou ${product.installments.count}x de R$ ${product.installments.value}</p>
                    <p class="card-content__button"><a href="#" class="button button-card" value="Comprar">Comprar</a></p>
                </div>
            </div>
        `

        return cardsGroup.innerHTML += card       
    });

    return console.log(items[0])

}