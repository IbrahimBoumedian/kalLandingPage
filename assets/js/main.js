// Show nav menu in mobile
const settingTime = document.querySelector(".setting-time");
const menuIcon = document.querySelector("header .nav-menu");
let nav = document.querySelector("header nav");
menuIcon.addEventListener("click", showMenu);
function showMenu() {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    menuIcon.setAttribute("name", "close-outline");
    settingTime.classList.add("hide");
  } else {
    menuIcon.setAttribute("name", "menu-outline");
    settingTime.classList.remove("hide");
  }
}

// Show header buttons on scrolling for small device
const navMobileBtns = document.querySelector(".mobile-btns");
window.addEventListener("scroll", showMobileBtns);
function showMobileBtns() {
  if (window.scrollY > 500) {
    header.classList.add("mobile");
    navMobileBtns.classList.add("mobile");
  } else {
    header.classList.remove("mobile");
    navMobileBtns.classList.remove("mobile");
  }
}

// Add active class to nav links
let navLinks = Array.from(
  document.querySelectorAll("header .nav-link")
);

navLinks.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nav.classList.remove("active");
    menuIcon.setAttribute("name", "menu-outline");
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});


// Flip services card on click event
const servicesCards = Array.from(
  document.querySelectorAll("#services .services-items .flip-card")
);
servicesCards.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    servicesCards.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});

//  Faq section accordion
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Scroll top top progress
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#118ac5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Show Login Form on i click on the login icon
const loginIcons = document.querySelectorAll(".login-icon");
const loginForm = document.querySelector(".form-screen");

function showLogin() {
  loginForm.classList.toggle("active");
  nav.classList.remove("active");
  menuIcon.setAttribute("name", "menu-outline");
}

loginIcons.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    showLogin();
  });
});

// Hide login form
let hideIcons = Array.from(
  document.querySelectorAll(".form-screen .close-icon")
);
function hideLogin() {
  loginForm.classList.remove("active");
  menuIcon.setAttribute("name", "menu-outline");
}
hideIcons.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    hideLogin();
  });
});

// Customize plan And and || remove features
// let addFeatureItem = document.querySelector(".add-feature-item");
// addFeatureItem.addEventListener("click", (e) => {
//   addFeatures();
// });

// function addFeatures() {
//   let input = prompt("Customize your feature plan");
//   let li = document.createElement("li");
//   li.className += `custom-feature`;
//   let featureList = document.querySelector(
//     ".custom-plan .generic_feature_list ul "
//   );
//   li.innerHTML += `
//   <div contenteditable="true" class="custom-feature-text">${input.trim()}</div>
//   <ion-icon class="remove-feature-icon" name="close-outline"></ion-icon>
//   `;
//   featureList.appendChild(li);
//   let featureItems = Array.from(
//     document.querySelectorAll(".custom-plan .generic_feature_list li ")
//   );
//   featureItems.forEach((feature, index) => {
//     feature.addEventListener("click", (e) => {
//       if (e.target.classList.contains("remove-feature-icon")) {
//         feature.className += ` animate__animated  animate__flipOutX`;
//         setTimeout(() => {
//           feature.remove();
//         }, 700);
//       } else {
//         console.log("error");
//       }
//     });
//   });
// }



