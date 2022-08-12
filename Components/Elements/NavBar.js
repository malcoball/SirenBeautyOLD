import makeElm from "../MakeElm.js";

function mobileLinks (name,imageSrc,idName){
  const out = makeElm('div','mobile navLink',idName);
    const text = makeElm('a','mobile',"",name);
    const img = makeElm('img','mobile',"");
    img.src = imageSrc;
    out.append(text,img);
  return out;

}

export default function Nav(DOMTarget){
    const navPush = makeElm('div',"",'navPush');
  
    const navOutter = makeElm('div',"",'navOutter');
      const nav = makeElm('nav');
        const cont = makeElm('div',"",'navCont');
          const mail = makeElm('a',"desktop navLink","",'sirenbeautynottingham@gmail.com');
          mail.DOMTarget = "Mail";
          mail.href = "#";
          const midDiv = makeElm('div','linksCont');
            const midDivLinks = [];
            // Desktop
            midDivLinks.push(makeElm('a','desktop navLink',"navHome",'Home'))
            midDivLinks.push(makeElm('a','desktop navLink',"navServ",'Services'))
            midDivLinks.push(makeElm('a','desktop navLink',"navPort",'Portfolio'))
            midDivLinks.push(makeElm('a','desktop navLink',"navBook",'How to book'))
            // DOMTarget is essentially what's used to handle the different page loads(name of wanted page)
            midDivLinks.forEach(element => {
              element.DOMTarget = element.innerHTML;
            });
            // Mobile
            midDivLinks.push(mobileLinks('Email','Images/NavIcons/Mail.png'));
            midDivLinks[midDivLinks.length-1].DOMTarget = 'Mail';
            midDivLinks.push(mobileLinks('Home','Images/NavIcons/Home.png','navHome'));
            midDivLinks[midDivLinks.length-1].DOMTarget = 'Home';
            midDivLinks.push(mobileLinks('Services','Images/NavIcons/Mail.png','navServ'));
            midDivLinks[midDivLinks.length-1].DOMTarget = 'Services';
            midDivLinks.push(mobileLinks('Portfolio','Images/NavIcons/Port.png','navPort'));
            midDivLinks[midDivLinks.length-1].DOMTarget = 'Portfolio';
            midDivLinks.push(mobileLinks('Booking','Images/NavIcons/Book.png','navBook'));
            midDivLinks[midDivLinks.length-1].DOMTarget = 'How to book';
            
            
  
  
    DOMTarget.append(navOutter,navPush);
      navOutter.append(nav);
        nav.append(cont);
          cont.append(mail,midDiv);
            midDivLinks.forEach(element => {midDiv.append(element);});
}