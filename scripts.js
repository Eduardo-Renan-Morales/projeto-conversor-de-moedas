
const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.querySelector(".currency-value-to-convert")      // valor em Real
    const currencyToConverted = document.querySelector(".currency-value")               // Outras moedas

    const dolarToday = 5.2 
    const euroToday = 6.2                                                             // valor do dolar

if(currencySelect.value == "dolar"){  // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO DOLAR,ENTRA AQUI
    currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)                                            // moedas convertidas
}

if(currencySelect.value == "euro"){   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
    currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {                     // valores convertidos na tela
        style: "currency",
        currency: "EUR" 
    }).format(inputCurrencyValue / euroToday )
}

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {                       // valor digitado
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

convertButton.addEventListener("click", convertValues)