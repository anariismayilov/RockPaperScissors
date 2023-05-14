var select = document.querySelectorAll(".selectcontainer")
var playerscore = document.querySelector(".playerscore")
var player = document.querySelector(".player")
var compscore = document.querySelector(".compscore")
var comp = document.querySelector(".comp")
for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("click", (e) => {
        var playerturn = Math.ceil(Math.random() * 3)
        if (playerturn == 1) {
            comp.id = "rock"
            comp.innerHTML = '<i class="fa-regular fa-hand-back-fist fa-flip-horizontal"></i>'
        }
        else if (playerturn == 2) {
            comp.id = "paper"
            comp.innerHTML = '<i class="fa-regular fa-hand fa-flip-horizontal"></i>'
        }
        else {
            comp.id = "scissors"
            comp.innerHTML = '<i class="fa-regular fa-hand-scissors fa-rotate-90"></i>'
        }
        if (e.currentTarget.id == "rock") {
            player.innerHTML = '<i class="fa-regular fa-hand-back-fist fa-flip-horizontal"></i>'
        }
        else if (e.currentTarget.id == "paper") {
            player.innerHTML = '<i class="fa-regular fa-hand fa-flip-horizontal"></i>'
        }
        else {
            player.innerHTML = '<i class="fa-regular fa-hand-scissors fa-rotate-90"></i>'
        }
        if (e.currentTarget.id === comp.id) { }
        else if (
            (e.currentTarget.id == "scissors" && comp.id == "paper") || (e.currentTarget.id == "rock" && comp.id == "scissors") || (e.currentTarget.id == "paper" && comp.id == "rock")
        ) { playerscore.innerHTML = Number(playerscore.innerHTML) + 1 }
        else {
            { compscore.innerHTML = Number(compscore.innerHTML) + 1 }
        }
    })
}
