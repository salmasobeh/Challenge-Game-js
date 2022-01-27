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
//--------------------------------------------------------
// the pattern of the pc
function patterns() {
    userpattern = []
    level++
    document.getElementById("title").innerHTML = "level" + " " + level
    var randomcolor = btn_colors[Math.floor(Math.random() * btn_colors.length)]
    pcpattern.push(randomcolor)
    console.log(randomcolor)

    document.getElementById("" + randomcolor).classList.add("fadein")
    setTimeout(function() {
        document.getElementById("" + randomcolor).classList.remove("fadein")
    }, 150)
    randomplaysound(randomcolor)
}
// comparing the pattern between user and computer
//-----------------------------------------------------------
function compare(index) {

    if (pcpattern[index] === userpattern[index]) {
        if (userpattern.length === pcpattern.length) {
            setTimeout(function() {
                patterns()
            }, 1000)
        }
    } else {
        randomplaysound("wrong")
        document.getElementsByTagName("body")[0].classList.add("game-over")
        document.getElementById("title").innerHTML = "Game over, Press Any Key to Restart"
        setTimeout(function() {
            document.getElementsByTagName("body")[0].classList.remove("game-over")

        }, 250)

        //we reset everything
        pcpattern = []
        level = 0
        userpattern = []
        game_start = false

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