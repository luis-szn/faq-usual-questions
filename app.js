
//get buttons and answers
const button1 = document.getElementById("button1");
const answer1 = document.getElementById("answer1");
const button2 = document.getElementById("button2");
const answer2 = document.getElementById("answer2");
const button3 = document.getElementById("button3");
const answer3 = document.getElementById("answer3");
const button4 = document.getElementById("button4");
const answer4 = document.getElementById("answer4");


//add class to show answers
button1.onclick = function(){
    answer1.classList.toggle("show");
}

button2.onclick = function(){
    answer2.classList.toggle("show");
}

button3.onclick = function(){
    answer3.classList.toggle("show");
}

button4.onclick = function(){
    answer4.classList.toggle("show");
}