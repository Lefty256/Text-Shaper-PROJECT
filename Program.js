//POCETAK Definiranje class

class MainText {
    constructor(_DEFAULTfontSize, _DEFAULTfontWeight, _DEFAULTfontFamily, _DEFAULTtext, _DEFAULTfontColor, _DEFAULTreferecneElementID) {
        this._text = _DEFAULTtext;
        this._fontSize = _DEFAULTfontSize;
        this._fontWeight = _DEFAULTfontWeight;
        this._fontFamily = _DEFAULTfontFamily;
        this._fontColor = _DEFAULTfontColor;
        this._referenceElementID = _DEFAULTreferecneElementID;
    }

    get text() {
        return this._text;
    }
    get fontSize() {
        return this._fontSize;
    }
    get fontWeight() {
        return this._fontWeight;
    }
    get fontFamily() {
        return this._fontFamily;
    }
    get fontColor() {
        return this._fontColor;
    }
    get referenceElementID() {
        return this._referenceElementID;
    }

    set text(newText) {
        this._text = newText;
    }
    set fontSize(newFontSize) {
        this._fontSize = newFontSize;
    }
    set fontWeight(newFontWeight) {
        this._fontWeight = newFontWeight;
    }
    set fontFamily(newFontFamily) {
        this._fontFamily = newFontFamily;
    }
    set fontColor(newFontColor) {
        this._fontColor = newFontColor;
    }


}


// INSTANCIRANJE GLOBALNOG OBJEKTA GLAVNOG TEKSTA


const ShapedText = new MainText(40, 400, "TimesNewRoman", "Lorem Ipsum", "#000000", "displayTextID");


// VARIABLES

const textInput = document.getElementById("displayTextInput");
const colorCircles = document.getElementsByClassName("colorCircle");
const weightOptions = document.getElementById("fontWeights");
const fontTypeOptions = document.getElementById("fontTypes");
const colorCirclesArray = Array.from(colorCircles);

const increaseFontSizeButton = document.getElementById("increaseSizeButton");
const decreaseFontSizeButton = document.getElementById("decreaseSizeButton");
const displayFontSizeValue = document.getElementById("fontSizeInput");


// INICIJALIZACIJA DEFAULT VRIJEDNOSTI

applyTextChange();
applyFontColorChange();
applyFontWeightChange();
applyFontTypeChange();
applyFontSizeChange();
applyFontSizeChangeDisplayValue();




// EVENT LISTENERS

colorCirclesArray.forEach(element => {
    element.addEventListener('click', () => {
        ShapedText.fontColor = element.style.backgroundColor;
        applyFontColorChange();
    })
});

weightOptions.addEventListener('change', () => {
    ShapedText.fontWeight = weightOptions.value;
    applyFontWeightChange();
});

fontTypeOptions.addEventListener('change', () => {
    ShapedText.fontFamily = fontTypeOptions.value;
    applyFontTypeChange();
});

textInput.addEventListener("focusout", () => {
    ShapedText.text = textInput.value;
    applyTextChange();
});

increaseFontSizeButton.addEventListener('click', () => {
    let size = ShapedText.fontSize;
    ShapedText.fontSize++;
    applyFontSizeChange();
    applyFontSizeChangeDisplayValue();
});

decreaseFontSizeButton.addEventListener('click', () => {
    let size = ShapedText.fontSize;
    ShapedText.fontSize--;
    applyFontSizeChange();
    applyFontSizeChangeDisplayValue();
});

displayFontSizeValue.addEventListener("focusout", () => {
    ShapedText.fontSize = displayFontSizeValue.value;
    applyFontSizeChange();
    applyFontSizeChangeDisplayValue();
});



// FUNCTIONS

function applyTextChange() {
    document.getElementById(ShapedText.referenceElementID).innerText = ShapedText.text;
}

function applyFontColorChange() {
    document.getElementById(ShapedText.referenceElementID).style.color = ShapedText.fontColor;
}

function applyFontWeightChange() {
    document.getElementById(ShapedText.referenceElementID).style.fontWeight = ShapedText.fontWeight;
}

function applyFontTypeChange() {
    document.getElementById(ShapedText.referenceElementID).style.fontFamily = ShapedText.fontFamily;
}

function applyFontSizeChange() {
    document.getElementById(ShapedText._referenceElementID).style.fontSize = `${ShapedText.fontSize}px`;
   
}

function applyFontSizeChangeDisplayValue() {
    displayFontSizeValue.value = `${ShapedText.fontSize}px`;
}



// ENUMS
