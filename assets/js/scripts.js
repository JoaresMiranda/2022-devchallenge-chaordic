const cardsGroup = document.querySelector('.cards-group')

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const requestURL = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const arrayProducts = request.response;
    product(arrayProducts.products);
    pagination(arrayProducts.nextPage);
}


const product = (productData) => {
    const items = productData.map(data => {
        const card = `
            <div class="card">
                <div class="card-header">
                    <img src="http:${data.image}">
                </div>
                <div class="card-content">
                    <h3 class="card-content__title">${data.name}</h3>
                    <p class="card-content__description">${data.description}</p>
                    <p class="card-content__prices__oldprice">De: ${formatter.format(data.oldPrice)}</p>
                    <p class="card-content__prices__price">Por: ${formatter.format(data.price)}</p>
                    <p class="card-content__prices__installments">ou ${data.installments.count}x de ${formatter.format(data.installments.value)}</p>
                    <p class="card-content__button"><a href="#" class="button button-card" value="Comprar">Comprar</a></p>
                </div>
            </div>
        `
        return cardsGroup.innerHTML += card;
    })    
}

const pagination = (currentPage) => {
    console.log(currentPage)
}