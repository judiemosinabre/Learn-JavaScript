const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthConverter = document.getElementById("length-converter")
const volConverter = document.getElementById("vol-converter")
const massConverter = document.getElementById("mass-converter")


convertBtn.addEventListener("click", function(){
    lengthConvert()
})

function lengthConvert() {
    let toFeet = (inputEl.value*3.281).toFixed(3)
    let toMeters = (inputEl.value/3.281).toFixed(3)

    let toLiters = (inputEl.value/0.264).toFixed(3)
    let toGallons = (inputEl.value*0.264).toFixed(3)

    let toKilogram = (inputEl.value/2.204).toFixed(3)
    let toPounds = (inputEl.value*2.204).toFixed(3)

    lengthConverter.innerHTML += 
    `<p>
        ${inputEl.value} meters = ${toFeet} feet | ${inputEl.value} feet = ${toMeters} meters
    </p>`

    
    volConverter.innerHTML += 
    `<p>
        ${inputEl.value} liters = ${toGallons} gallons | ${inputEl.value} gallons = ${toLiters} liters
    </p>`

    massConverter.innerHTML += 
    `<p>
        ${inputEl.value} kilos = ${toPounds} pounds | ${inputEl.value} pounds = ${toKilogram} kilos
    </p>`

}