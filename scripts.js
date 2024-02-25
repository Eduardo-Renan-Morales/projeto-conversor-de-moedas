
const convertButton = document.querySelector(".convert-Button")  // chamei uma função para o botão
const currencySelect = document.querySelector(".currency-select")
const currencySelectOut = document.querySelector(".currency-select-out")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.querySelector(".currency-value-to-convert")      // valor em Real
    const currencyToConverted = document.querySelector(".currency-value")               // Outras moedas

    const dolarToday = 4.96
    const euroToday = 5.37
    const libraToday = 6.28
    const bitcoinToday = 1.0
    const RealToday = 1.0







    if (currencySelectOut.value == "real" && currencySelect.value == "dolar") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday),

            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "real" && currencySelect.value == "euro") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday),

            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "real" && currencySelect.value == "libra") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-UK", {                     // valores convertidos na tela
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday),

            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "real" && currencySelect.value == "bitcoin") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday),

            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
    }



    //-------------------------------------------------------------------------------------------------------------------------------------------------------



    if (currencySelectOut.value == "dolar" && currencySelect.value == "euro") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.0826),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "dolar" && currencySelect.value == "libra") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-UK", {                     // valores convertidos na tela
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.8550),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue)
    }


    if (currencySelectOut.value == "dolar" && currencySelect.value == "bitcoin") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 4.96),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "dolar" && currencySelect.value == "real") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 4.96),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputCurrencyValue)
    }




    if (currencySelectOut.value == "euro" && currencySelect.value == "dolar") {
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue * 0.9236),

            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)

    }


    if (currencySelectOut.value == "euro" && currencySelect.value == "libra") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-UK", {                     // valores convertidos na tela
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.8550),

            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "euro" && currencySelect.value == "bitcoin") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 5.37),

            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
    }


    if (currencySelectOut.value == "euro" && currencySelect.value == "real") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {                       // valor digitado
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 5.37),

            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
    }


    if (currencySelectOut.value == "libra" && currencySelect.value == "dolar") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.2661),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "libra" && currencySelect.value == "euro") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.16),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "libra" && currencySelect.value == "bitcoin") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 6.28),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
    }


    if (currencySelectOut.value == "libra" && currencySelect.value == "real") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 6.28),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "bitcoin" && currencySelect.value == "dolar") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 0.2016),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "bitcoin" && currencySelect.value == "euro") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.1862),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
    }


    if (currencySelectOut.value == "bitcoin" && currencySelect.value == "libra") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("en-UK", {                     // valores convertidos na tela
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.1592),

            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
    }

    if (currencySelectOut.value == "bitcoin" && currencySelect.value == "real") {   // SE O SELECT ESTIVER SELECIONADO NA FUNÇÃO EURO,ENTRA AQUI
        currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 1.0)

        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {                     // valores convertidos na tela
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

}


function changeCurrency() {


    const currencyName = document.getElementById("currency-name")
    const curruencyImg = document.querySelector(".currency-img")

    const currencyNameToConvert = document.getElementById("currency-name-to-convert")
    const currencyImgToConvert = document.querySelector(".currency-img-to-convert")


    if (currencySelectOut.value == "real") {
        currencyNameToConvert.innerHTML = " Real Brasileiro"
        currencyImgToConvert.src = "./assets/real.png"
    }

    if (currencySelectOut.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar americano"
        currencyImgToConvert.src = "./assets/dolar.png"
    }

    if (currencySelectOut.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToConvert.src = "./assets/euro.png"
    }

    if (currencySelectOut.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra"
        currencyImgToConvert.src = "./assets/libra 1.png"
    }

    if (currencySelectOut.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "bitcoin"
        currencyImgToConvert.src = "./assets/bitcoin 1.png"
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------------

    if (currencySelect.value == "real") {
        currencyName.innerHTML = " Real Brasileiro"
        curruencyImg.src = "./assets/real.png"
    }


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
currencySelectOut.addEventListener("change", changeCurrency),
    currencySelect.addEventListener("change", changeCurrency),
    convertButton.addEventListener("click", convertValues)