console.log("it works");


//Selezioniamo gli elementi
const formEl = document.querySelector("#ticket-form")

const kmField = document.getElementById("km-field")
const ageField = document.getElementById("age-field")
const btnSubField = document.getElementById("btn-sub")
const paxInfo = document.getElementById("result")


//console.log(kmField, ageField);

// Ascoltiamo con il "Submit"

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()// Cosí evitiamo che la pagina si ricarichi in auto
    //console.log(1,1);
    
    // Avendo il prezzo, i Km , Eta passeggero dovremmo riuscire a calcolare il prezzo finale
    const km = kmField.value
    const age = ageField.value
    
    let price = km * 0.21;
    // Di cosa abbiamo bisogno per fare il calcolo
    // Di cosa abbiamo bisogno per verificare l'età
    // Creiamo una condizione con i parametri che ci dice il passeggero
    if (age <= 18){
        price = * 0.8; 
    } else if (age >= 65)
        price = * 0.6;

    // Mettere il prezzo nell'h3 con "id result"
    result.textContent = `Il prezzo totale del biglietto è € ${price.toFixed(2)}`;


    console.log(km, age);



});