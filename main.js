console.log("it works");

const formEl = document.querySelector("form")

const kmField = document.getElementById("km-field")
const ageField = document.getElementById("age-field")
const btnSubField = document.getElementById("btn-sub")
const paxInfo = 


console.log(kmField, ageField);

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    const info = `${kmField.value} ${ageField.value}`

})