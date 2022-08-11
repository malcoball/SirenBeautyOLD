// import Pages from './Components/Pages.js'
import Pages from './Components/Pages.js'
import Navbar from './Components/Elements/NavBar.js'
import OpenEmail from './Components/OpenEmail.js';
import Footer from './Components/Elements/Footer.js'


const out = document.querySelector('#app');

function navLinks(){
  // Add functionality to the navbar essentially
  // Desktop links
  const links = document.querySelectorAll(".navLink");
  links.forEach(element => {
    element.addEventListener("click",()=>{
      if (element.DOMTarget === "Mail") OpenEmail();
      else {
        makePage(element.DOMTarget);
      }
    })
  });
}
function changePage(title){
  // Handle all of code when the page changes
  // Change the nav title
  document.title = `${title} | Siren Beauty`;
  // Remove the old content
  const root = document.querySelector("#app");
  // Make sure the app element has a unique tag
  if (title === "How to book") title = "Booking"
  root.className = title+"App";

  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  
}
function makePage(title){
  if (title === "Mail"){
    alert("send email pls");
  } else {
  changePage(title);
  Navbar(out);
  navLinks();

  switch(title){
    case "Home":
      Pages.Index(out);
      break;

    case "Services":
      Pages.Services(out);
      break;

    case "Portfolio":
      Pages.Portfolio(out);
      break;

    case "How to book":
      Pages.Booking(out);
      break;


    default: alert(`${title} passed`); break;
  }
  Footer(out);
  }
}
function init(){
  makePage("Home");
}
init();
