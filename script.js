let open1 = document.querySelector(".open");
let open2 = document.querySelector(".open2");
let open3=document.querySelector(".open3")
let open4=document.querySelector(".open4");
let open5=document.querySelector(".open5");
let paragraph = document.querySelector(".text");
let paragraph2 = document.querySelector(".text2");
let paragraph3 = document.querySelector(".text3")
let paragraph4 = document.querySelector(".text4");
let paragraph5=document.querySelector(".text5");
let close1 = document.querySelector(".close");
let close2 = document.querySelector(".close2");
let close3 = document.querySelector(".close3");
let close4 = document.querySelector(".close4")
let close5 = document.querySelector(".close5");
open1.addEventListener("click", function () {
  paragraph.style.display = "flex";
  open1.style.display = "none";
  close1.style.display = "flex";
});
close1.addEventListener("click", function () {
  paragraph.style.display = "none";
  open1.style.display = "flex";
  close1.style.display = "none";
});
open2.addEventListener("click", function () {
  paragraph2.style.display = "flex";
  open2.style.display = "none";
  close2.style.display = "flex";
});
close2.addEventListener("click", function () {
  paragraph2.style.display = "none";
  open2.style.display = "flex";
  close2.style.display = "none";
});
open3.addEventListener("click", function () {
  paragraph3.style.display = "flex";
  open3.style.display = "none";
  close3.style.display = "flex";
});
close3.addEventListener("click", function () {
  paragraph3.style.display = "none";
  open3.style.display = "flex";
  close3.style.display = "none";
});
open4.addEventListener("click", function () {
  paragraph4.style.display = "flex";
  open4.style.display = "none";
  close4.style.display = "flex";
});
close4.addEventListener("click", function () {
  paragraph4.style.display = "none";
  open4.style.display = "flex";
  close4.style.display = "none";
});
open5.addEventListener("click", function () {
  paragraph5.style.display = "flex";
  open5.style.display = "none";
  close5.style.display = "flex";
});
close5.addEventListener("click", function () {
  paragraph5.style.display = "none";
  open5.style.display = "flex";
  close5.style.display = "none";
});
