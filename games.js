//defining the variables 
var level = 0;
var pcpattern = []
var userpattern = []
var game_start = false
var btn_colors = ["blue", "green", "red", "yellow"]
var btn = document.getElementsByClassName("btn")

/// this part is related to pressing the keyboard to the start
//-----------------------------------------------------------
document.addEventListener('keyup', event => {
    game_start = true
    if (event.code === 'Space') {
        if (game_start) {
            document.getElementById("title").innerHTML = "level" + " " + level
            patterns()
            game_start = true
        }
    }
})
