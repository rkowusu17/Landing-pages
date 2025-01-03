const menuBtn = document.getElementById("menu-id");
const navLinks = document.getElementById("navLinks");
const dateInp = document.getElementById("Date");
const footerYear = document.getElementById("year");

const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
  // console.log(menuBtn);
  // console.log(menuBtnIcon);
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const newDate = new Date();
const month = newDate.getMonth() + 1;
const year = newDate.getFullYear();
const date = newDate.getDate();
const currentDate = `${month} - ${date} - ${year}`;

dateInp.setAttribute("placeholder", currentDate);

footerYear.textContent = year;
// console.log(footerYear);

scrollReveal({
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});

scrollReveal().reveal(".header_image img", {
  origin: "right",
});

scrollReveal().reveal(".header_content h1", {
  delay: 500,
});

scrollReveal().reveal(".header_content p", {
  delay: 1000,
});

scrollReveal().reveal(".header_content form", {
  delay: 1500,
});

scrollReveal().reveal(".header_content bar", {
  delay: 2000,
});
