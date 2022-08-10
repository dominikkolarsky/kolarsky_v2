// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
  header.style.backgroundColor = 'rgb(31, 32, 41)';

}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  header.classList.remove("active");
  header.style.backgroundColor = 'unset';
}

// flip card
function flipCard(card) {

  if (card.classList == 'card' || card.classList == 'card more') {
    otherCards();
    card.classList.add('is-flipped');
  } else {
    card.classList.remove('is-flipped');
  }
}

// flip other opened cards
const otherCard = document.querySelectorAll('.card');
function otherCards() {
  otherCard.forEach((c) => {
    if (c.classList == 'card is-flipped' || c.classList == 'card more is-flipped' || c.classList == 'card more is-flipped more-hide') {
      c.classList.remove('is-flipped')
    }
  });
}

// show more cards
const showMoreBtn = document.querySelector('#moreCard-btn');
const moreCards = document.querySelectorAll('.more');
const showMore__text = document.querySelector('.showMore__text');
showMoreBtn.addEventListener("click", showMoreCards);

function showMoreCards() {
  moreCards.forEach((x) => x.classList.toggle("more-hide"));
  if (showMoreBtn.checked) {
    showMore__text.innerHTML = "View less projects"
  } else {
    showMore__text.innerHTML = "View more projects"
  }
}


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

//Get the button:
const mybutton = document.querySelector("#scrollUp");
const header = document.querySelector('#header');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
    header.style.backgroundColor = 'rgba(0,0,0, 0.1)';
  } else {
    mybutton.style.display = 'none';
    header.style.backgroundColor = 'unset';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}