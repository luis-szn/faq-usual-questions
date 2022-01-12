
//get buttons and answers
const buttonDown1 = document.getElementById("button-down1");
const buttonUp1 = document.getElementById("button-up1");
const answer1 = document.getElementById("answer1");
const buttonDown2 = document.getElementById("button-down2");
const buttonUp2 = document.getElementById("button-up2");
const answer2 = document.getElementById("answer2");
const buttonDown3 = document.getElementById("button-down3");
const buttonUp3 = document.getElementById("button-up3");
const answer3 = document.getElementById("answer3");
const buttonDown4 = document.getElementById("button-down4");
const buttonUp4 = document.getElementById("button-up4");
const answer4 = document.getElementById("answer4");


//Show answers, hide down arrow and show up arrow
buttonDown1.onclick = function(){
    answer1.classList.add("show");
    buttonDown1.classList.remove("show");
    buttonUp1.classList.add("show");
}

buttonDown2.onclick = function(){
    answer2.classList.add("show");
    buttonDown2.classList.remove("show");
    buttonUp2.classList.add("show");
}

buttonDown3.onclick = function(){
    answer3.classList.add("show");
    buttonDown3.classList.remove("show");
    buttonUp3.classList.add("show");
}

buttonDown4.onclick = function(){
    answer4.classList.add("show");
    buttonDown4.classList.remove("show");
    buttonUp4.classList.add("show");
}

//Hide answers, show down arrow and hide up arrow

buttonUp1.onclick = function(){
    answer1.classList.remove("show");
    buttonDown1.classList.add("show");
    buttonUp1.classList.remove("show");
}

buttonUp2.onclick = function(){
    answer2.classList.remove("show");
    buttonDown2.classList.add("show");
    buttonUp2.classList.remove("show");
}

buttonUp3.onclick = function(){
    answer3.classList.remove("show");
    buttonDown3.classList.add("show");
    buttonUp3.classList.remove("show");
}

buttonUp4.onclick = function(){
    answer4.classList.remove("show");
    buttonDown4.classList.add("show");
    buttonUp4.classList.remove("show");
}