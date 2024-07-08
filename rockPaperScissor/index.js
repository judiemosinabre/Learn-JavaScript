let hands = ["rock", "paper", "scissor"]


let randomNumber = Math.floor(Math.random()*3)
// console.log(randomNumber)

function randomItem() {
    let randItem = hands[randomNumber]
    return randItem
}

console.log(randomItem())