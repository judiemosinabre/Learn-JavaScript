const convertBtn = document.getElementById("convert-btn")
const lengthConverter = document.getElementById("length-converter")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function(){
    lengthConvert()
})

function lengthConvert() {
    let toFeet = (inputEl.value*3.281).toFixed(3)
    let toMeters = (inputEl.value/3.281).toFixed(3)
    let toLiters = (inputEl*0.264).toFixed(3)
    let toGallons = (inputEl/0.264).toFixed(3)
    let toMass = (inputEl*2.204).toFixed(3)
    let toPounds = (inputEl/2.204).toFixed(3)

    lengthConverter.innerHTML += 
    `<p>
        ${inputEl.value} meters = ${toFeet} feet | ${inputEl.value} feet = ${toMeters} meters
    </p>`


    
}