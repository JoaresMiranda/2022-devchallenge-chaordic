const buildCard = (data) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return `
    <div class="card">
        <div class="card-header">
            <img src="https:${data.image}">
        </div>
        <div class="card-content">
            <h3 class="card-content__title">${data.name}</h3>
            <p class="card-content__description">${data.description}</p>
            <p class="card-content__prices__oldprice">De: ${formatter.format(
              data.oldPrice
            )}</p>
            <p class="card-content__prices__price">Por: ${formatter.format(
              data.price
            )}</p>
            <p class="card-content__prices__installments">ou ${
              data.installments.count
            }x de ${formatter.format(data.installments.value)}</p>
            <p class="card-content__button"><a href="#" class="button button-card" value="Comprar">Comprar</a></p>
        </div>
    </div>
    `;
};

export default buildCard;
