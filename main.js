console.log("it works");


//Selezioniamo gli elementi
const formEl = document.querySelector("form")

const kmField = document.getElementById("km-field")
const ageField = document.getElementById("age-field")
const btnSubField = document.getElementById("btn-sub")
const paxInfo = document.getElementById("result")


console.log(kmField, ageField);

// Ascoltiamo con il "Submit"

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()// Cosí evitiamo che la pagina si ricarichi in auto
    const km = kmField.value
    const age = ageField.value

    let price = kmField * (0.21)




});