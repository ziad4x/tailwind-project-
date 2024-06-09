// ************************************** burgermenu*******************************
const ham=document.querySelector('#hambrger');
const m=document.querySelector('#menuu');
const cicon=document.querySelector('#close');
const navLink = document.querySelectorAll(".nav_link");


navLink.forEach((link) =>
  link.addEventListener("click", () => {
    m.classList.add("hidden");
  })
);

cicon.addEventListener("click", () => {
  m.classList.add("hidden");
});

ham.addEventListener("click", () => {
  m.classList.remove("hidden");
});


// ************************* menu*************************************
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});
// ******************************** dark mod*************************
const darkbtn=document.getElementById('moon');
const html =document.querySelector('html');
if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

darkbtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  darkbtn.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  darkbtn.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("mode", "light");
}
// ************************* website animation*************
const x = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
})

x.reveal(".home__image");
x.reveal(".home__content",  { origin: "bottom" });
x.reveal(".category__card", { interval: 300 })
x.reveal(".promo__card-1",  { origin: "left" });
x.reveal(".promo__card-2",  { origin: "right" });x
x.reveal(".about__img",  { origin: "bottom" });
x.reveal(".about__content",  { origin: "top" });

x.reveal(".menu__items",  { origin: "left" });

x.reveal(".footer");
