
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

let numHolder = []

// allClear.addEventListener("click",function(){
//     answer.textContent = 0
//     answer.style.color = "#222"
// })

//number functions
zeroBtn.addEventListener("click", function(){
    answer.textContent += 0
    answer.style.color = "white"
})

oneBtn.addEventListener("click", function(){
    answer.textContent += 1
    answer.style.color = "white"
})

twoBtn.addEventListener("click", function(){
    answer.textContent += 2
    answer.style.color = "white"
})

threeBtn.addEventListener("click", function(){
    answer.textContent += 3
    answer.style.color = "white"
})

fourBtn.addEventListener("click", function(){
    answer.textContent += 4
    answer.style.color = "white"
})

fiveBtn.addEventListener("click", function(){
    answer.textContent += 5
    answer.style.color = "white"
})

sixBtn.addEventListener("click", function(){
    answer.textContent += 6
    answer.style.color = "white"
})

sevenBtn.addEventListener("click", function(){
    answer.textContent += 7
    answer.style.color = "white"
})

eightBtn.addEventListener("click", function(){
    answer.textContent += 8
    answer.style.color = "white"
})

nineBtn.addEventListener("click", function(){
    answer.textContent += 9
    answer.style.color = "white"
})

