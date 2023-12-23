//scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");
const navBar = document.querySelector("nav");
//bio typing
const bioText = document.getElementById("bio-text");
const loadingText = document.getElementById("hidden-bio").textContent;
//heading typing
var heading = document.getElementById("heading");
var headingText = document.getElementById("hidden-heading").textContent;

//scroll to top
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


//typing heading and bio
window.onload = function() {typeText() ;typeText1()};


//scrolling
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navBar.classList.add('hidden');
  } else {
    navBar.classList.remove('hidden');
  }
  prevScrollpos = currentScrollPos;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollUp.classList.remove('hidden');
  } else {
    scrollUp.classList.add('hidden');
  }
}

//typing bio
let charIndex = 0;
function typeText() {
  if(charIndex < loadingText.length) {
    bioText.innerHTML += loadingText.charAt(charIndex); 
    charIndex++;
    setTimeout(typeText, 30);
  }
}

//typing heading
let charIndex1 = 0;
function typeText1(){
  if(charIndex1 < headingText.length) {
    heading.innerHTML += headingText.charAt(charIndex1);
    charIndex1++;
    setTimeout(typeText1, 60);
  }
}


//changing dark and light mode of social icon
const BUTTON = document.getElementById("dark-mode-toggle");
const INSTA_ICON = document.getElementById("instagram")
const TWITTER_ICON = document.getElementById("twitter")
const LINKEDIN_ICON = document.getElementById("linkedin")
const GITHUB_ICON = document.getElementById("github")
const UPICON = document.getElementById("up-ico")
const SYNC = true;

const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  if (SYNC)
    document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
  INSTA_ICON.setAttribute("src", IS_PRESSED ? "assets/icons/instagram-black.svg" : "assets/icons/instagram-white" + ".svg");
  TWITTER_ICON.setAttribute("src", IS_PRESSED ? "assets/icons/twitter-black.svg" : "assets/icons/twitter-white" + ".svg");
  LINKEDIN_ICON.setAttribute("src", IS_PRESSED ? "assets/icons/linkedin-black.svg" : "assets/icons/linkedin-white" + ".svg");
  GITHUB_ICON.setAttribute("src", IS_PRESSED ? "assets/icons/github-black.svg" : "assets/icons/github-white" + ".svg");
  UPICON.setAttribute("src", IS_PRESSED ? "assets/icons/up-black.png" : "assets/icons/up-white" + ".png");
};

BUTTON.addEventListener("click", TOGGLE);

