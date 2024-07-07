let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "J-archives",
    chips: 0
}


// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    return randomNumber
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


