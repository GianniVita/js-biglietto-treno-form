console.log("it works");

const formEl = document.querySelector("form")

const kmField = document.getElementById("km-field")
const ageField = document.getElementById("age-field")
const btnSubField = document.getElementById("btn-sub")

console.log(kmField, ageField);

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()

})