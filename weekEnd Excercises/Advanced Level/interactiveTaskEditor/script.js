const $ = id => document.getElementById(id);

const displayBox = $("displayBox");

function clearText(){
    displayBox.innerText = "";
}

function updateFontSize(value){
    const fontSize = value + "px" 
    displayBox.style.fontSize = fontSize;
}

function updateFontFamily(value){
    displayBox.style.fontFamily = value;
}

function updateTextColor(value){
    displayBox.style.color = value;

    const textColorPreview = $("textColorPreview");
    textColorPreview.style.backgroundColor = value;
}

function updateBgColor(value){
    displayBox.style.backgroundColor = value;

    const bgColorPreview = $("bgColorPreview");
    bgColorPreview.style.backgroundColor = value;
}

function toggleBold(){
    const btnBold = $("btnBold");
    const fontWeight =  window.getComputedStyle(displayBox).fontWeight;
    if(fontWeight  >= 700){
        displayBox.style.fontWeight = 400;
    }
    else{
        displayBox.style.fontWeight = 700;
    }
    btnBold.classList.toggle("active");

}

function toggleItalic(){
    const btnItalic = $("btnItalic");
    const fontStyle =  window.getComputedStyle(displayBox).fontStyle;
    if(fontStyle  === "normal"){
        displayBox.style.fontStyle = "italic";
    }
    else{
        displayBox.style.fontStyle = "normal";
    }
    btnItalic.classList.toggle("active");
}

function setAlignment(value){
    displayBox.style.justifyContent = value;

    const btnLeft = $("btnLeft");
    const btnCenter = $("btnCenter");
    const btnRight = $("btnRight");

    [btnLeft, btnCenter, btnRight].forEach(btn => btn.classList.remove("active"));

    if (value === "flex-start"){
        btnLeft.classList.add("active");
}
    else if(value === "flex-end"){
        btnRight.classList.add("active");
    }
    else{
        btnCenter.classList.add("active");
    }
}

function transformText(value){
    const text = displayBox.innerText;

    switch (value){
        case "uppercase":
            displayBox.innerText = text.toUpperCase();
            break;

        case "lowercase":
            displayBox.innerText = text.toLowerCase();
            break;

        case "capitalize":
            displayBox.innerText = text
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                .join(" ");
            break;
    }
}