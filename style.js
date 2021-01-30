const bars = document.getElementById('bars');
const navbar = document.getElementById('nav-contents');

function myFunction(x) {
    if (x.matches) { // If media query matches
        navbar.style.visibility = 'hidden';

        bars.onclick = function() {
            navbar.style.visibility === 'hidden' ?  navbar.style.visibility = 'visible' : navbar.style.visibility = 'hidden';
        }
    }
    else {
        navbar.style.visibility = 'visible';
    }
  }



let x = window.matchMedia("(max-width: 840px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes