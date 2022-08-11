import makeElm from "../MakeElm.js";

function navLinks(target,targetName){
  // Add the page changes
  target.addEventListener("click",()=>{
    console.log("targetName",targetName)
    makePage(targetName);
  })
}

export default function Nav(DOMTarget){
    const navPush = makeElm('div',"",'navPush');
  
    const navOutter = makeElm('div',"",'navOutter');
      const nav = makeElm('nav');
        const cont = makeElm('div',"",'navCont');
          const mail = makeElm('a',"desktop","",'sirenbeautynottingham@gmail.com');
          mail.href = "#";
          const midDiv = makeElm('div');
            const midDivLinks = [];
            // Desktop
            midDivLinks.push(makeElm('a','desktop',"",'Home'))
            midDivLinks.push(makeElm('a','desktop',"",'Services'))
            midDivLinks.push(makeElm('a','desktop',"",'Portfolio'))
            midDivLinks.push(makeElm('a','desktop',"",'How to book'))
            navLinks(midDivLinks[0],"Home");
            navLinks(midDivLinks[1],"Services");
            navLinks(midDivLinks[2],"Portfolio");
            navLinks(midDivLinks[3],"How to book");
            // Mobile
            midDivLinks.push(makeElm('a','mobile',"",'Email'));
            midDivLinks.push(makeElm('a','mobile',"",'Homeaaaaa'))
            midDivLinks.push(makeElm('a','mobile',"",'Servicesaaaaa'))
            midDivLinks.push(makeElm('a','mobile',"",'Portfolioaaaaa'))
            midDivLinks.push(makeElm('a','mobile',"",'How to bookaaaaa'))
            navLinks(midDivLinks[0+4],"Home");
            navLinks(midDivLinks[1+4],"Home");
            navLinks(midDivLinks[2+4],"Services");
            navLinks(midDivLinks[3+4],"Portfolio");
            navLinks(midDivLinks[4+4],"How to book");
  
  
    DOMTarget.append(navOutter,navPush);
      navOutter.append(nav);
        nav.append(cont);
          cont.append(mail,midDiv);
            midDivLinks.forEach(element => {midDiv.append(element);});
}