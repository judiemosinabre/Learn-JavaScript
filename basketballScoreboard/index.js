let homeScore = document.getElementById("home-score")
let countHome = 0

let guestScore = document.getElementById("guest-score")
let countGuest = 0


// HOME
function homePlus1() {
    countHome += 1
    homeScore.textContent = countHome
    leadHighlight()
    prompt()

}

function homePlus2() {
    countHome += 2
    homeScore.textContent = countHome
    leadHighlight()
    prompt()
}

function homePlus3() {
    countHome += 3
    homeScore.textContent = countHome
    leadHighlight()
    prompt()
}

//GUEST
function guestPlus1() {
    countGuest += 1
    guestScore.textContent = countGuest
    leadHighlight()
    prompt()
}

function guestPlus2() {
    countGuest += 2
    guestScore.textContent = countGuest
    leadHighlight()
    prompt()
}

function guestPlus3() {
    countGuest += 3
    guestScore.textContent = countGuest
    leadHighlight()
    prompt()
}


// COLOR CHANGE
function leadHighlight() {
    if (countHome > countGuest) {
        homeScore.style.color = "rgba(209, 250, 229, 1)"
        guestScore.style.color = "rgba(249, 79, 109, 1)"
    }
    
    else if (countHome < countGuest) {
        homeScore.style.color = "rgba(249, 79, 109, 1)"
        guestScore.style.color = "rgba(209, 250, 229, 1)"
    }
    
    else {
        homeScore.style.color = "rgba(249, 79, 109, 1)"
        guestScore.style.color = "rgba(249, 79, 109, 1)"
    }
}

//PROMPT
function prompt() {
    let prompt = document.getElementById("scorer")

    let homeLead = "Home team takes the lead!"
    let guestLead = "Guest team is in the lead!"
    let tie = "It's a tie!"

    if (countHome > countGuest) {
        prompt.textContent = homeLead
    }
    else if (countHome < countGuest) {
        prompt.textContent = guestLead
    }
    else {
        prompt.textContent = tie
    }

}



 