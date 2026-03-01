const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if(value === "C"){
            clearDisplay();
        }
        else if(value === "⌫"){
            deleteLast();
        }
        else if(value === "="){
            calculate();
        }
        else{
            append(convertSymbol(value));
        }
    });
});

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        let result = eval(display.value);
        display.value = result;
    }catch{
        display.value = "Error";
    }
}

function convertSymbol(symbol){
    if(symbol === "÷") return "/";
    if(symbol === "×") return "*";
    if(symbol === "−") return "-";
    return symbol;
}

/* Keyboard Support */
document.addEventListener("keydown", function(event){
    const key = event.key;

    if(!isNaN(key) || "+-*/.%()".includes(key)){
        append(key);
    }
    else if(key === "Enter"){
        calculate();
    }
    else if(key === "Backspace"){
        deleteLast();
    }
    else if(key === "Escape"){
        clearDisplay();
    }
});
