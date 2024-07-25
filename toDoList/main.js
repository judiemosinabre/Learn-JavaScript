import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js"
import { getDatabase, ref, push, remove, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://to-do-list-bece5-default-rtdb.asia-southeast1.firebasedatabase.app/"

}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDb = ref(database, "toDoList")

const ulClass = document.getElementById("list-container")
const addBtn = document.getElementById("add-button")
const delAllBtn = document.getElementById("delete-all-button")
const inputTask = document.getElementById("task-input")

function render(arr){
    let items = ""
    for (let i=0; i < arr.length; i++){
        items += `<li>${arr[i]}</li>`
    }
    ulClass.innerHTML = items
    
    console.log(ulClass.innerHTML)
}

onValue(referenceInDb, function(snapshot){
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        console.log(snapshotValues)

        const toDoList = Object.values(snapshotValues) //get values only and store in arr
        render(toDoList)
        console.log("rendered latest") //for debuggingg
    }
    
})

addBtn.addEventListener("click", function(){
    push(referenceInDb, inputTask.value)
    inputTask.value = ""
})

delAllBtn.addEventListener("dblclick", function(){
    remove(referenceInDb)
    ulClass.innerHTML = ""
})