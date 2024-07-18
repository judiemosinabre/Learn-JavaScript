let myLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push("https://v2.scrimba.com/learn-javascript-c0v/~04j")
// console.log(typeof myLeads)

// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

//const = constant, cannot re-assign value
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
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





