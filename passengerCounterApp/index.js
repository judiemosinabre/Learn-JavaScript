// document.getElementById("count").innerText = 5
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
}

function reset() {
    count = 0
    countEl.textContent = count
}




