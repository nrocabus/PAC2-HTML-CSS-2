/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */


switch(window.location.pathname){
  case "/pagina1.html":
    document.getElementsByClassName("nav-item")[0].classList.add("nav-item--active");
    break;
  case "/pagina2.html":
    document.getElementsByClassName("nav-item")[1].classList.add("nav-item--active");
    break;
  case "/pagina3.html":
    document.getElementsByClassName("nav-item")[2].classList.add("nav-item--active");
    break;
}


+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
