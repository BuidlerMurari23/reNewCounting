let decrementBtn = document.getElementById("decrement");
let displayValue = document.getElementById("displayValue");
let incrementBtn = document.getElementById("increase");
let resetBtn = document.getElementById("reset");

// for decrement
decrementBtn.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if ( value > 0){
        displayValue.innerText = value - 1;
    }else{
        alert("Nagative value is not allowed")
    }
})

// for increment
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if ( value >= 10){
        alert("10 + value is not allowed ")
    }else{
        displayValue.innerText = value + 1 ;
    }
})
resetBtn.addEventListener("click", () =>{
    displayValue.innerText = 0;
})
