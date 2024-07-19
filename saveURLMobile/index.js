import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"
require("dotenv").config()

const firebaseConfig = {
    // databaseURL: "https://leads-tracker-app-d1f10-default-rtdb.asia-southeast1.firebasedatabase.app/"
    databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

console.log(firebaseConfig.databaseURL)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")



deleteBtn.addEventListener("dblclick", function(){
    
})

inputBtn.addEventListener("click", function(){
    console.log(inputEl.value)
    clearText(inputEl)

})

function clearText(inputEl) {
    inputEl.value = ""
}

function render(leads) {
    let listItem = ""

    for (let i=0; i<leads.length; i++){
        listItem += `
        <li>
            <a target='_blank' href ='${leads[i]}'> 
                ${leads[i]}
            </a>
        </li>`

    }

    ulEl.innerHTML = listItem
}





