let billInput = document.getElementById("bill-input");
let billValue = billInput.value;

let personInput = document.getElementById("person-input");
let personValue = personInput.value

document.getElementById("tip-amount").textContent = "$ 0.00";
document.getElementById("total-amount").textContent = "$ 0.00";

billInput.addEventListener("change", e => {
    billValue = billInput.value
})

personInput.addEventListener("change", e => {
    personValue = personInput.value
})

let tipArray = document.getElementById("tip-selection").querySelectorAll("span, input");

for (let i = 0; i < tipArray.length; i++) {
    tipArray[i].addEventListener("click", e => {
        tipArray.forEach(e => {
            e.classList.remove("selected");
            e.classList.remove("bg-teal-200");
            e.classList.remove("text-teal-800");
            e.classList.add("hover:bg-teal-200");
            e.classList.add("hover:text-teal-800");
            
        });
        tipArray[i].classList.toggle("selected");
        tipArray[i].classList.toggle("bg-teal-200");
        tipArray[i].classList.toggle("hover:bg-teal-200");
        tipArray[i].classList.toggle("text-teal-800");
        tipArray[i].classList.toggle("hover:text-teal-800");
    });
}

function reset() {
    document.getElementById("tip-amount").textContent = "$ 0.00";
    document.getElementById("total-amount").textContent = "$ 0.00";
}

// document.querySelector("#tip-section").addEventListener("click", e => {
//     console.log(parseInt(document.querySelector(".selected").textContent))
// })

document.addEventListener("change", e => {
    document.getElementById("tip-amount").textContent = "$ " + `${((billValue * (parseInt(document.querySelector(".selected").textContent) / 100))/personValue).toFixed(2)}`;
    document.getElementById("total-amount").textContent = "$ " + `${((((billValue * (parseInt(document.querySelector(".selected").textContent) / 100))/personValue) + (parseInt(billValue)/personValue)).toFixed(2))}`
})

document.getElementById("tip-selection").addEventListener("click", e => {
    document.getElementById("tip-amount").textContent = "$ " + `${((billValue * (parseInt(document.querySelector(".selected").textContent) / 100))/personValue).toFixed(2)}`;
    document.getElementById("total-amount").textContent = "$ " + `${((((billValue * (parseInt(document.querySelector(".selected").textContent) / 100))/personValue) + (parseInt(billValue)/personValue)).toFixed(2))}`
})

// document.getElementById("custom-tip").addEventListener("click", e => {
//     document.getElementById("custom-tip").type = "number"
// })