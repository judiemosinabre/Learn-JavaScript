let myLeads = []

//const = constant, cannot re-assign value
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
    clearText(inputEl)

})

function clearText(inputEl) {
    inputEl.value = ""
}

function renderLeads() {
    // placeholder for listItems
    let listItem = ""

    for (let i=0; i<myLeads.length; i++){
        // listItem += "<li><a target='_blank' href ='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItem += `
        <li>
            <a target='_blank' href ='${myLeads[i]}'> 
                ${myLeads[i]}
            </a>
        </li>`

        // create element --> const li = document.createElement("li")
        // set text content --> li.textContent = myLeads[i]
        // append to ul --> ulEl.append(li)

    }

    ulEl.innerHTML = listItem
}





