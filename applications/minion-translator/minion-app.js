var translationInput = document.querySelector("#translate-input");
var translationOutput = document.querySelector("#translate-output");
var translationBtn = document.querySelector("#btn-translate");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function clickHandler() {
    var inputText = translationInput.value;
    var inputText = translationInput.value

    fetch(getTranslationUrl(inputText))
    .then(responce => responce.json())
    .then(json => {
        var translatedText = json.contents.translated;
        translationOutput.innerText = translatedText;
    })

}

translationBtn.addEventListener("click", clickHandler)
