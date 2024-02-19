var menu = document.querySelector(".menu");
var full = document.querySelector(".fullscreen");
var leftimage = document.querySelector(".leftimage");
var rightimage = document.querySelector(".rightimage");
var rightlastimage = document.querySelector(".rightlastimage");
flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    leftimage.style.opacity = 0;
    rightimage.style.opacity = 0;
    rightlastimage.style.opacity = 0;
    flag = 1;
  } else {
    full.style.top = "-100%";
    leftimage.style.opacity = 1;
    rightimage.style.opacity = 1;
    rightlastimage.style.opacity = 1;
    flag = 0;
  }
});
