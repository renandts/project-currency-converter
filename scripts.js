
const button = document.getElementById('converter-button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.9
const bitcoin = 0.000011

const converterValue = () => {
    const inputReais = document.getElementById('input-real').value
    const valueRealText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    const converterCurrencyDolar = inputReais / dolar
    const converterCurrencyEuro = inputReais / euro
    const converterCurrencyBitcoin = inputReais * bitcoin
    
    valueRealText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais);

    if(select.value === "US$ Dólar Americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
        ).format(converterCurrencyDolar);
}

    if(select.value === "€ Euro"){
  currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(converterCurrencyEuro);
}
if(select.value === "Bitcoin BTC"){
  currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'BTC',minimumFractionDigits: 8 }
  ).format(converterCurrencyBitcoin.toFixed(6));
}

//new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC', minimumFractionDigits: 8 });
};

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro';
        currencyImg.src = "./Assets/Euro.png";
    } 
    if(select.value === 'US$ Dólar Americano'){
        currencyName.innerHTML = 'Dólar';
        currencyImg.src = "./Assets/EUA.png";
    }
    if(select.value === 'Bitcoin BTC'){
      currencyName.innerHTML = 'Bitcoin';
        currencyImg.src = "./Assets/Bitcoin.png";
    }
    console.log(select.value)
    converterValue()
}

console.log(select.value)

button.addEventListener('click', converterValue)
select.addEventListener('change', changeCurrency)