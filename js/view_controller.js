"use strict";
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: toDo
	Check Daten :: toDo
    Btn. Trigger :: toDo
    Business-Logic (Alter --> Getränk) :: toDo
    Bild austauschen :: toDo
*/

// Modul Ablaufsteuerung | Test:
// controller();
function controller() {
    ausgabe(updateImg(checkAge(getInput())));
    
}



// Trigger - Btn 
const myBtn = document.getElementById("trigBtn");
myBtn.addEventListener("click",actOnClick);


// Trigger - Input
const field = document.getElementsByName("eingabe")[0];
field.addEventListener("input", isInputValid);

// Event-Dispatcher
function actOnClick() {
    if (isInputValid()) {
        controller();
    } else {
        ausgabe("Input nicht korrekt");
    }
}

// Modul: Check auf korrekte Eingaben ...
function isInputValid() {
    let inputStr = field.value;
    let patt = /^[0-9]{1,3}$/g;
    let cond = patt.test(inputStr);

    if (!cond) {
        field.value = "";
        updateImg(data.default.bev);
        
    }
    return false;
    
}

// Modul: Eingabe | Test:
// ausgabe(getInput());
function getInput() {
    const inputField = document.getElementsByName("eingabe")[0];
    let age = parseInt(inputField.value);
    return age;
    
}

// Modul: Business-Logic (Mapping) | Test:
// ausgabe(checkAge(2));
// ausgabe(checkAge(7));
// ausgabe(checkAge(13));
// ausgabe(checkAge(18));
// ausgabe(checkAge(-7));
function checkAge(age) {

    switch (true) {
        case (age >= data.wine.lower):
            return data.wine.bev;
        case (age >= data.cola.lower):
            return data.cola.bev;
        case (age >= data.juice.lower):
            return data.juice.bev;
        case (age >= data.milk.lower):
            return data.milk.bev;
        default:
            return data.default.bev;
    }
    
    
    
    
}


// Modul: Bild aktualisieren | Test:
// ausgabe(updateImg("cola"));
// ausgabe(updateImg("milch"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName; 
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}