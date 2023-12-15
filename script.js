const navLinks = document.querySelectorAll(".nav-links li");
const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overflow = document.querySelector(".overflow");
const mobileLinks = document.querySelectorAll(".mobile-links li");
const mblButtons = document.querySelector(".mbl-btn");
const subOne = document.querySelector(".sub-menu.one");
const subTwo = document.querySelector(".sub-menu.two");

menuBtn.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu-btn img");
  menuBtn.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  mblButtons.style.display = "block";
  overflow.classList.toggle("active-menu");
  if (menuBtn.classList.contains("active-btn")) {
    icon.src = "icon-close-menu.svg";
  } else {
    icon.src = "icon-menu.svg";
  }
});

navLinks.forEach((link) => {
  // if(link){
  //   link[0].addEventListener("click");
  //   subTwo.style.display="none";
  // }
  // else{
  //   link[1].addEventListener("click");
  //   subOne.style.display="none";
  // }
  const subMenu = link.querySelector(".sub-menu");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});
mobileLinks.forEach((link) => {
  const subMenu = link.querySelector(".mobile-sub");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});