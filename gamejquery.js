//defining the variables 
var level = 0;
var pcpattern = []
var userpattern = []
var game_start = false
var btn_colors = ["blue", "green", "red", "yellow"]
var btn = document.getElementsByClassName("btn")



/// this part is related to pressing the keyboard to the start
//-----------------------------------------------------------
$(document).keypress(function() {
    game_start = true
    if (game_start) {
        $("#title").text("level" + " " + level);
        patterns();
        game_start = true;
    }
});