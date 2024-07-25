import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://to-do-list-bece5-default-rtdb.asia-southeast1.firebasedatabase.app/"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDb = ref(database, "toDoList")

const ulClass = document.getElementsByClassName("list-container")
console.log(ulClass)

function render(arr){
    let items = ""
    for (let i=0; i < arr.length; i++){
        items += `<li>${arr[i]}</li>`
    }
    ulClass.innerHtml = items
}

