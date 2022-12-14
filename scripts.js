
const button = document.getElementById('converter-button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.9

const converterValue = () => {
    const inputReais = document.getElementById('input-real').value
    const valueRealText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    const converterCurrencyDolar = inputReais / dolar
    const converterCurrencyEuro = inputReais / euro
    
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
    console.log(select.value)
    converterValue()
}



button.addEventListener('click', converterValue)
select.addEventListener('change', changeCurrency)