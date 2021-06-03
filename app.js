var myArrow = document.querySelector(".hero .arrow");
var myHero = document.querySelector(".hero");
var myAs = document.querySelectorAll(".hero .arrow .as");
var mydark = document.querySelectorAll(".cover");
myArrow.addEventListener("click", function() {
    myHero.classList.toggle("heroAfter");
    for (var i = 0; i < 2; i++) {
        myAs[i].classList.toggle("asf");
        mydark[i].classList.toggle("cover1");
    }

    myArrow.style.backgroundColor = "rgba(0,0,0,.4)";
});