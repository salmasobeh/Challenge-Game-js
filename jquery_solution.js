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

//--------------------------------------------------------
// the pattern of the pc
function patterns() {
    userpattern = [];
    level++;
    $("#title").text("level" + " " + level);
    var randomcolor = btn_colors[Math.floor(Math.random() * btn_colors.length)];
    pcpattern.push(randomcolor);
    console.log(randomcolor);

    $("#" + randomcolor).fadeOut("slow");
    $("#" + randomcolor).fadeIn(100);
    randomplaysound(randomcolor);
}

//this part is related to the user click on the buttons
//------------------------------------------------------------

$(".btn").click(function() {
    var usercolor_id = $(this).attr('id');
    //  console.log(usercolor_id + " hey")
    userpattern.push(usercolor_id);
    randomplaysound(usercolor_id);
    buttonanimation(usercolor_id);
    compare(userpattern.length - 1);
});

// comparing the pattern between user and computer
//-----------------------------------------------------------
function compare(index) {

    if (userpattern[index] == pcpattern[index]) {
        //  console.log(index + "  " + pcpattern[index] + "&" + userpattern[index])
        if (userpattern.length == pcpattern.length) {
            setTimeout(function() {
                patterns();
            }, 1000);
        }
    } else {
        randomplaysound("wrong");
        $("body").addClass("game-over");
        $("#title").text("Game over, Press Any Key to Restart");
        setTimeout(function() {
            $("body").removeClass("game-over");

        }, 350);

        //we reset everything
        pcpattern = [];
        level = 0;
        userpattern = [];
        game_start = false;

    }
}

//--------------------------------------------------------
//play random sound 
function randomplaysound(random_sound) {
    var audio = new Audio("sounds/" + random_sound + ".mp3");
    audio.play()
}

//---------------------------------------------------------
//animate the buttons when clicked using class pressed
function buttonanimation(colorbtn) {
    $("#" + colorbtn).addClass("pressed");
    setTimeout(function() {
        $("#" + colorbtn).removeClass("pressed");
    }, 150);
}