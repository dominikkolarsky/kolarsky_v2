// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");
const navLink = document.querySelectorAll("#nav-link");
// const header = document.querySelector('#header');

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  header.classList.remove("active");
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// let prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-70px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// scroll-to-top selection
// const scrollUp = document.querySelector("#scroll-up");

// scroll to top functionality
// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });


// Theme switcher selection
// const checkbox = document.querySelector("#checkbox");

// Theme switcher functionality
// checkbox.addEventListener("change", () => {
// Toggle website theme
//   document.body.classList.toggle("dark");
// });



// swicher skills
function switchTab() {
  const skillsCheck = document.querySelector('#skillsCheck');
  const favourites = document.querySelector('#favourites');
  const others = document.querySelector('#others');

  if (skillsCheck.checked == true) {
    others.style.display = 'flex';
    favourites.style.display = 'none';
  } else {
    others.style.display = 'none';
    favourites.style.display = 'flex';
  }
}
