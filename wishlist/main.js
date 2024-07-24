import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://wishlist-c258a-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDb = ref(database, "wishlist")

const wishInput = document.getElementById("wishlist-input")
const submitBtn = document.getElementById("submit-button")
const submitGuide = document.getElementById("submit-guide")
const listUl = document.getElementById("list-ul")

function render(arr){
    let items = ""
    for (let i = 0; i < arr.length; i++){
        items += `<li>${arr[i]}</li>`
    }
    listUl.innerHTML = items
}

onValue(referenceInDb, function(snapshot){
    const snapshotValues = snapshot.val()
    const wishesList = Object.values(snapshotValues)
    render(wishesList)
})

submitBtn.addEventListener("click", function(){
    console.log(wishInput.value)
    // push(referenceInDb, wishInput.value)
    if (push(referenceInDb, wishInput.value)){
        submitGuide.textContent = "We wish you the best!"
    }
    wishInput.value = ""
    
})
