const coll = document.getElementsByClassName("list_item");
let i;
const chevron = document.querySelectorAll(".disp_bef");
const cont = document.querySelectorAll(".content");
const bundle = document.querySelectorAll(".bundle_list");
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {

        for (let k = 0; k < cont.length; k++) {
            cont[k].style.display = "none";
            chevron[k].style.transform = "rotate(0deg)";
        }

        let j = this.getAttribute("cellIndex");

        if (j == 5) {
            bundle[0].style.display = "none";
            bundle[1].style.display = "none";
        }
        else if (j == 4) {
            bundle[0].style.display = "none";
        }
        else {
            bundle[0].style.display = "block";
            bundle[1].style.display = "block";
        }
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            chevron[j].style.transform = "rotate(0deg)";
        } else {
            content.style.display = "block";
            chevron[j].style.transform = "rotate(90deg)";
        }
    });
}


// Slider control
const slider = document.querySelectorAll(".comment_card");

let px = 0;

function slide_left() {
    console.log(px);
    if(px != 0)
    px = px + 300;
    for (let k = 0; k < slider.length; k++) {
        slider[k].style.left = `${px}px`;
    }

}

function slide_right() {
    console.log(px);
    if(px != -1800)
    px = px - 300;
    for (let k = 0; k < slider.length; k++) {
        slider[k].style.left = `${px}px`;
    }

}


// Features
const features = document.querySelectorAll('.select');
for(let i of features) {
    i.addEventListener("click", function() {

        for(let j of features)  {
            j.style.backgroundColor = "transparent";
            this.style.color = "#888";
        }

        this.style.backgroundColor = "#C7DDF6";
        this.style.color = "#000";
    });
}

// typewriter


var count = 0;
var txt = 'interainteractive.';
var speed = 100;

typeWriter();
function typeWriter() {
  if (count < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}