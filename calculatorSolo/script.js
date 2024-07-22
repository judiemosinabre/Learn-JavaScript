
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

const history = document.getElementById("history")
const allClear = document.getElementById("all-clear")
const clear = document.getElementById("clear")
const plus = document.getElementById("plus")
const equal = document.getElementById("equal")

let firstNum = []
let secondNum = []

let plusActive = false

let finalAnswer = 0

allClear.addEventListener("click",function() {
    firstNum = []
    console.log(firstNum)
    answer.textContent ="‎"
    history.textContent ="‎"
    answer.style.color = "#222"
    answer.style.border = "1px solid white"
})

clear.addEventListener("click", function(){
    firstNum.pop()
    answer.textContent = firstNum.join("")

})

plus.addEventListener("click",function(){
    history.textContent = firstNum.join("")
    secondNum = firstNum
    firstNum = []
    answer.textContent = "‎" //empty
    plusActive = true

    console.log(secondNum)
    console.log(firstNum)
})

equal.addEventListener("click", function(){
    history.textContent ="‎"
    if (plusActive) {
        answer.textContent = sumGetter()
        console.log(sumGetter())
    }
})


function sumGetter(){
    firstNum = parseInt(firstNum.join(''), 10) //10 = decimal
    secondNum = parseInt(secondNum.join(''), 10)

    return firstNum + secondNum
}

//number functions
zeroBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(0)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

oneBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(1)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

twoBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(2)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

threeBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(3)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

fourBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(4)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

fiveBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(5)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

sixBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(6)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

sevenBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(7)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

eightBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(8)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

nineBtn.addEventListener("click", function(){
    console.log(firstNum)
    firstNum.push(9)
    answer.textContent = firstNum.join("")
    answer.style.color = "white"
})

