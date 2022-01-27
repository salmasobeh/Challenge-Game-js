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

//this part is related to the user click on the buttons
//------------------------------------------------------------
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        var usercolor_id = e.target.getAttribute("id")
            //  console.log(usercolor_id + " hey")
        userpattern.push(usercolor_id)
        randomplaysound(usercolor_id)
        buttonanimation(usercolor_id)
        compare(userpattern.length - 1)
    }
}

//---------------------------------------------------------
//play random sound 
function randomplaysound(random_sound) {
    var audio = new Audio("sounds/" + random_sound + ".mp3")
    audio.play()
}

//---------------------------------------------------------
//animate the buttons when clicked using class pressed
function buttonanimation(colorbtn) {
    document.getElementById("" + colorbtn).classList.add("pressed")
    setTimeout(function() {
        document.getElementById("" + colorbtn).classList.remove("pressed")
    }, 150)
}