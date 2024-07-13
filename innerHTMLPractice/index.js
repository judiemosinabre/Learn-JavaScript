const container = document.getElementById("container")


container.innerHTML = "<button id='clickBtn'>Click Me!</button>"
const clickButton = document.getElementById("clickBtn")

clickButton.addEventListener("click", function(){
    container.innerHTML += "<p>gotcha!</p>"
})


