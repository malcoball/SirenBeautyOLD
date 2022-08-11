import Index from './Components/Elements/Index.js';
import Navbar from './Components/Elements/NavBar.js';
import EmailForm from './Components/Elements/EmailForm.js';
import Services from './Components/Elements/Services.js';
import Portfolio from './Components/Elements/Portfolio.js';
import Booking from './Components/Elements/Booking.js';
import Footer from './Components/Elements/Footer.js';

const out = document.querySelector('#app');


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
  switch(title){
    case "Index":
    case "Home":
      Index(out);
      EmailForm(out);
      break;

    case "Services":
      Services(out);
      break;

    case "Portfolio":
      Portfolio(out);
      break;

    case "Book":
    case "How to book":
      Booking(out);
      break;

    default: alert("title hasn't been set on makePage"); break;
  }
  Footer(out);
}

makePage("How to book");