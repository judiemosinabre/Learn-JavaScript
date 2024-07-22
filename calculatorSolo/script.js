
const answer = document.getElementById("answer")

//numbers
const zeroBtn = document.getElementById("zero")
const oneBtn = document.getElementById("one")
const twoBtn = document.getElementById("two")
const threeBtn = document.getElementById("three")
const fourBtn = document.getElementById("four")
const fiveBtn = document.getElementById("five")
const sixBtn = document.getElementById("six")
const sevenBtn = document.getElementById("seven")
const eightBtn = document.getElementById("eight")
const nineBtn = document.getElementById("nine")

const allClear = document.getElementById("all-clear")
const plus = document.getElementById("plus")

let numHolder = []

allClear.addEventListener("click",function() {
    numHolder = []
    console.log(numHolder)
    answer.textContent ="‎"
    answer.style.color = "#222"
    answer.style.border = "1px solid white"
})

plus.addEventListener("click",function(){
    
})

//number functions
zeroBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(0)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

oneBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(1)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

twoBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(2)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

threeBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(3)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

fourBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(4)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

fiveBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(5)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

sixBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(6)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

sevenBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(7)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

eightBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(8)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

nineBtn.addEventListener("click", function(){
    console.log(numHolder)
    numHolder.push(9)
    answer.textContent = numHolder.join("")
    answer.style.color = "white"
})

