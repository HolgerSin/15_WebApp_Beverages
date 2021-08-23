
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: check!
	Check Daten :: check!
    Btn. Trigger :: check!
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
// controller();
function controller() {
    ausgabe(updateImg(checkAge(getInput())));
}

// Trigger - BtnClick 
const btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick)

// Trigger - Input
const field  = document.getElementsByName("eingabe")[0];
field.addEventListener("input",isInputValid);

// Event-Dispatcher
function actOnClick() {
    if (isInputValid()) {
        controller();
    } else {
        ausgabe("Input nicht korrekt!")
    }
}

// Modul: Check auf korrekte Eingaben ...
function isInputValid() {

    let inputStr = field.value;
    let patt = /^[0-9]{1,3}$/g;   // 0 - 999
    let cond = patt.test(inputStr);
   
    if (!cond) {  // Fehlerbehandlung
        field.value = "";
        updateImg(data.default.bev);
    }

    return cond;
}

// Modul: Eingabe | Test:
// ausgabe(getInput());
function getInput() {
    return parseInt(field.value);
}

//Modul: Business-Logic (Mapping) | Test:
// ausgabe(checkAge(2));
// ausgabe(checkAge(7));
// ausgabe(checkAge(13));
// ausgabe(checkAge(18));
// ausgabe(checkAge(99));
// ausgabe(checkAge(135));
function checkAge(age) {
    switch (true) 
    {
        case (age >= data.milk.lower) && (age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
        default:
        return data.default.bev;
    }
}

// Modul: Bild aktualisieren | Test:
//ausgabe(updateImg("cola"));
//ausgabe(updateImg("milch"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName; // monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}