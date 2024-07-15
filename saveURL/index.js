let myLeads = []

//const = constant, cannot re-assign value
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()

})

function renderLeads() {
    // placeholder for listItems
    let listItem = ""

    for (let i=0; i<myLeads.length; i++){
        listItem += "<li>" + myLeads[i] + "</li>"

        // create element --> const li = document.createElement("li")
        // set text content --> li.textContent = myLeads[i]
        // append to ul --> ulEl.append(li)

    }

    ulEl.innerHTML = listItem
}





