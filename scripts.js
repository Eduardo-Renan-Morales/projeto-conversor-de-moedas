
const convertButton = document.querySelector(".convert-Button")  // chamei uma função para o botão
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.querySelector(".currency-value-to-convert")      // valor em Real
    const currencyToConverted = document.querySelector(".currency-value")               // Outras moedas

    const dolarToday = 4.96
    const euroToday = 5.37
    const libraToday = 6.28
    const bitcoinTday = 1.0                                                           // valor do dolar

    if (currencySelect.value == "dolar") {  // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO DOLAR,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)                                            // moedas convertidas
    }

    if (currencySelect.value == "euro") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {                     // valores convertidos na tela
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-UK", {                     // valores convertidos na tela
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTday)
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {                       // valor digitado
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const curruencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        curruencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        curruencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        curruencyImg.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        curruencyImg.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency),
    convertButton.addEventListener("click", convertValues)