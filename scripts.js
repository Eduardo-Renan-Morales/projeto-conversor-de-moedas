
const convertButton = document.querySelector(".convert-Button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.querySelector(".currency-value-to-convert")      // valor em Real
    const currencyToConverted = document.querySelector(".currency-value")               // Outras moedas

    const dolarToday = 5.2                                                              // valor do dolar

    const convertedValue = inputCurrencyValue / dolarToday                              // moedas convertidas

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {                       // valor digitado
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
}

convertButton.addEventListener("click", convertValues)