var btnTranslator = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occcured", error);
    alert("something wrong with server!")
}

function clickFunction() {
    var inputText = textInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

}

btnTranslator.addEventListener("click", clickFunction);