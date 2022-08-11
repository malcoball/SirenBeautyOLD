// import Pages from './Components/Pages.js'
import Pages from './Components/Pages.js'
import Navbar from './Components/Elements/NavBar.js'
import Footer from './Components/Elements/Footer.js'


const out = document.querySelector('#app');

function navLinks(){
  // Add functionality to the navbar essentially
  // Desktop links
  const links = document.querySelectorAll(".navLink");
  links.forEach(element => {
    element.addEventListener("click",()=>{
      makePage(element.DOMTarget);
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

    case "Book":
    case "How to book":
      Pages.Booking(out);
      break;

    default: alert("title hasn't been set on makePage"); break;
  }
  Footer(out);
}
function init(){
  makePage("Home");
}
init();
