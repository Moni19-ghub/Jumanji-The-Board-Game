var playingJumanjiTheme = false;
var count_elephant = 0;
var count_croc=0;
var count_rhino=0;
var count_monkey=0;
var audio = new Audio('Audio/Drum Sound Effect.mp3');
$("#Jumanji_Warning").click(function () {
    $("#Warning_Text").css({
        "letter-spacing": "3px",
        "font-size": "xx-large",
        "font-family": "Papyrus",
        "font-weight": "bolder",
        "color": "orange",
        "top": "34%",
        "left": "20%"
    }).fadeIn("slow");
    if (!playingJumanjiTheme) {
        audio.play();
        $("nav").effect("shake", { times: 41 }, 21000);
        $(".page").effect("shake", { times: 41 }, 21000);
        $("h1").effect("shake", { times: 41 }, 21000);
        playingJumanjiTheme = true;
    }
    else {
        audio.pause();
        audio.currentTime = 0;
        $("nav").stop(true, true);
        $(".page").stop(true, true);
        $("h1").stop(true, true);
        playingJumanjiTheme = false;
    }
    $("#Remember").text("Welcome to the Jungle")
});
$("#elephant").dblclick(function () {
    new Audio('Audio/Elephant.mp3').play();
    count_elephant++;
    $("#el").text("Press Count: " + count_elephant);
});
$("#croc").dblclick(function () {
    new Audio('Audio/Croc.mp3').play();
    count_croc++;
    $("#cr").text("Press Count: " + count_croc);
});
$("#rhino").dblclick(function () {
    new Audio('Audio/Rhino.mp3').play();
    count_rhino++;
    $("#rh").text("Press Count: " + count_rhino)
});
$("#monkey").dblclick(function () {
    new Audio('Audio/Monkey.mp3').play();
    count_monkey++;
    $("#mo").text("Press Count: " + count_monkey)
});
$(".Callout").mouseover(function () {
    $(this).css({
        "font-family": "Papyrus",
        "font-size": "200%",
        "color": "yellow"
    });
    alert("Jumanji!!!");
    $(this).append("Jumanji!!!");
});
var count = 0;
$("#toggleimages").click(function () {
    $(".token").toggle();
    $("p").toggle();
});
$("li").dblclick(function () {
    $(this).toggleClass("bright");
});
$("h1").click(function () {
    $(".intro").fadeToggle();
});
$("#rules").click(function () {
    $("ol").slideToggle();
});
$(".claw").dblclick(function () {
    $(this).hide();
})
$(".ruleslist").mouseover(function () {
    $(this).css({
        "color": "orange",
        "font-size": "110%"
    });
});
$(".plot").first().mouseover(function () {
    $(this).css({
        "font-style": "italic",
        "font-family":"Papyrus",
        "font-size": "120%",
        "color":"orange"
    });
});
$(".plot").mouseover(function () {
    $(this).css({
        "font-size": "120%",
        "color": "orange"
    });
});
$(".plagiarism").mouseover(function () {
    $(this).toggleClass("change");
});
$(".character").click(function () {
    $(this).fadeTo("slow", 0.6);
    $("plot_img").fadeTo("slow",0.6)
})
$(".descript").mouseover(function () {
    $(this).toggleClass("change");
});
