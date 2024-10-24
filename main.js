const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute("data-target");
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 70);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
// -------------------------------------------------------------------------------------
(function () {
  let socials = document.querySelectorAll(".social div");

  socials.forEach(function (social, index) {
    social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${
      index / 7 + 0.2
    }s`;
  });

  let rocketPieces = document.querySelectorAll(".rocket-body span");

  let rocket = document.querySelector(".rocket");

  let triggerStart = window.innerHeight / 5;

  let rocketOffsetTop = rocket.offsetTop;

  let thirdOffsetTop = rocketPieces[2].offsetTop;

  document.addEventListener("scroll", (e) => {
    if (window.scrollY > rocketOffsetTop - triggerStart) {
      rocketPieces[0].classList.add("active");
      rocketPieces[1].classList.add("active");
    } else {
      rocketPieces[0].classList.remove("active");
      rocketPieces[1].classList.remove("active");
    }

    if (window.scrollY > thirdOffsetTop - triggerStart) {
      rocketPieces[2].classList.add("active");
    } else {
      rocketPieces[2].classList.remove("active");
    }
  });
})();
// ------------------------------------------------------------------------------

const LoadFalconHeavyStats = () => {
  var t = new XMLHttpRequest();
  (t.onreadystatechange = function () {
    4 == this.readyState &&
      200 == this.status &&
      (addFalconHeavyStats(JSON.parse(this.responseText)),
      addFalconHeavyScripts());
  }),
    t.open(
      "GET",
      contentBaseUrl + "/api/spacex-website/falcon-heavy-stats",
      !0
    ),
    t.send();
};
function addFalconHeavyStats(t) {
  if (!t) return;
  document.getElementById(
    "stats"
  ).innerHTML = `\n    <div class="content-center">\n      <div id="stat1" class="column3 stat">\n        <span class="number">${t.totalLaunches}</span>\n        <span class="label">Total Launches</span>\n      </div>\n      <div id="stat2" class="column3 stat">\n        <span class="number">${t.totalLandings}</span>\n        <span class="label">Total Landings</span>\n      </div>\n      <div id="stat3" class="column3 stat">\n        <span class="number">${t.totalReflights}</span>\n        <span class="label">Total Reflights </span>\n      </div>\n    </div>\n  `;
}
function addFalconHeavyScripts() {
  const t = document.getElementById("fh");
  let a = document.createElement("script");
  a.setAttribute("type", "text/javascript"),
    a.setAttribute("src", "/static/core-min.js"),
    (a.onload = function () {
      let a = document.createElement("script");
      a.setAttribute("type", "text/javascript"),
        a.setAttribute("src", "/static/vehicles-min.js");
      let e = document.createElement("script");
      e.setAttribute("type", "text/javascript"),
        e.setAttribute("src", "/static/tabs-min.js"),
        t.appendChild(a),
        t.appendChild(e);
    }),
    t.appendChild(a);
}
"loading" != document.readyState
  ? LoadFalconHeavyStats()
  : document.addEventListener("DOMContentLoaded", LoadFalconHeavyStats);

// -------------------------------------------------------------

// let slideIndex = 1;
// showSlides(slideIndex);


// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active"; 
// }
