let homeScore = document.getElementById("home-score")
let countHome = 0

let guestScore = document.getElementById("guest-score")
let countGuest = 0


// HOME
function homePlus1() {
    countHome += 1
    homeScore.textContent = countHome
    leadHighlight()

}

function homePlus2() {
    countHome += 2
    homeScore.textContent = countHome
    leadHighlight()
}

function homePlus3() {
    countHome += 3
    homeScore.textContent = countHome
    leadHighlight()
}

//GUEST
function guestPlus1() {
    countGuest += 1
    guestScore.textContent = countGuest
    leadHighlight()
}

function guestPlus2() {
    countGuest += 2
    guestScore.textContent = countGuest
    leadHighlight()
}

function guestPlus3() {
    countGuest += 3
    guestScore.textContent = countGuest
    leadHighlight()
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



 