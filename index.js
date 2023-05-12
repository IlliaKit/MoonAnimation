let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let sec = document.getElementById("sec");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_behind.style.right = value * 0.5 + "px";

  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 2.5 + "px";

  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 5,
  effects: true,
});
