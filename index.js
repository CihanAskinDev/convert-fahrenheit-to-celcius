const form = document.querySelector("form");
form.addEventListener("submit", convertFToC)

function convertFToC(event) {
    event.preventDefault()
    const fahrenheit = (event.target.fahrenheit.value)
    const celcius = (fahrenheit -32)*(5/9)
    document.querySelector("h2").innerText = fahrenheit + " °F " + "is " + celcius.toLocaleString(2) + " °C" 
    
}