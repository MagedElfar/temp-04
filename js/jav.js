/*global document, prompt, console, alert*/

/*Carousel hight*/
 let fristCarousel = document.getElementById("frist-slider"),
     upperBar = document.getElementById("upper-bar"),
     nav = document.querySelector("nav");


fristCarousel.style.height = window.innerHeight - (upperBar.offsetHeight + nav.offsetHeight) + "px";;

/*window.onresize = function () {
    "use strict";
    fristCarousel.style.height = window.innerHeight - (upperBar.offsetHeight + nav.offsetHeight) + "px";;
}*/


/*work*/
var workList = document.querySelectorAll(".work ul li"),
    imgList = document.querySelectorAll(".container-fluid .row div");
console.log(imgList);

for (let i = 0; i < workList.length; i++) {
    workList[i].addEventListener("click", function () {
        "use strict";
        for (let j = 0; j< workList.length; j++) {
            if (workList[j].classList.contains("active-work")){
                workList[j].classList.remove("active-work");
                break;
            }    
        }
        this.classList.add("active-work");
        
        for (let k = 0; k< imgList.length; k++) {
            if (this.getAttribute("data-info") === imgList[k].getAttribute("data-op") || this.getAttribute("data-info") === "all" ) {
                if (imgList[k].classList.contains("work-img")) {
                    imgList[k].classList.remove("work-img")
                }
            } else {
                imgList[k].classList.add("work-img")
            }
        }
        
    });
};

$(document).ready(function () {
    $('.carousel').carousel({
    interval: 5000
});
})