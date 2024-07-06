let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let firstCard = 10
let secondCard = 8
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
    messageEl.style.fontStyle = "normal"
}

function newCard() {
    let newCards = 3
    cardsEl.textContent += " " + newCards
    sum += newCards
    renderGame()
}


