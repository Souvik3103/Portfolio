//scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");
const navBar = document.querySelector("nav")

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});



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


