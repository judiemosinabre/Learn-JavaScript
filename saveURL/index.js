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
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", function() {
    // console.log(tabs[0].url)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)

    })
})


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    clearText(inputEl)

})

function clearText(inputEl) {
    inputEl.value = ""
}

function render(leads) {
    // placeholder for listItems
    let listItem = ""

    for (let i=0; i<leads.length; i++){
        // listItem += "<li><a target='_blank' href ='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItem += `
        <li>
            <a target='_blank' href ='${leads[i]}'> 
                ${leads[i]}
            </a>
        </li>`

        // create element --> const li = document.createElement("li")
        // set text content --> li.textContent = myLeads[i]
        // append to ul --> ulEl.append(li)

    }

    ulEl.innerHTML = listItem
}





