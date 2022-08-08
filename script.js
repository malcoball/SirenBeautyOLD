function navLinks(target,targetName){
  // Add the page changes
  target.addEventListener("click",()=>{
    console.log("targetName",targetName)
    makePage(targetName);
  })
}

function changePage(title){
  // Handle all of code when the page changes
  // Change the nav title
  document.title = `${title} | Siren Beauty`;
  // Remove the old content
  const root = document.querySelector("#app");
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  
}
function makePage(title){
  changePage(title);
  Nav();
  switch(title){
    case "Home":
      Index();
      EmailForm();
      break;

    case "Services":
      Services();
      break;

    case "Portfolio":
      break;

    case "How to book":
      break;

    default: alert("title hasn't been set on makePage"); break;
  }
  Footer();
}

makePage("Home");