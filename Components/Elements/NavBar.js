import makeElm from "../MakeElm.js";

function mobileLinks (name,imageSrc){
  const out = makeElm('div','mobileIcon');
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
          const mail = makeElm('a',"desktop","",'sirenbeautynottingham@gmail.com');
          mail.href = "#";
          const midDiv = makeElm('div','linksCont');
            const midDivLinks = [];
            // Desktop
            midDivLinks.push(makeElm('a','desktop',"navHome",'Home'))
            midDivLinks.push(makeElm('a','desktop',"navServ",'Services'))
            midDivLinks.push(makeElm('a','desktop',"navPort",'Portfolio'))
            midDivLinks.push(makeElm('a','desktop',"navBook",'How to book'))
            // Mobile
            // midDivLinks.push(makeElm('a','mobile',"",'Email'));
            // midDivLinks.push(makeElm('a','mobile',"navHome",'Home'))
            // midDivLinks.push(makeElm('a','mobile',"navServ",'Services'))
            // midDivLinks.push(makeElm('a','mobile',"navPort",'Portfolio'))
            // midDivLinks.push(makeElm('a','mobile',"navBook",'Booking'))
            midDivLinks.push(mobileLinks('Email','Images/NavIcons/Mail.png'));
            midDivLinks.push(mobileLinks('Home','Images/NavIcons/Home.png'));
            midDivLinks.push(mobileLinks('Services','Images/NavIcons/Mail.png'));
            midDivLinks.push(mobileLinks('Portfolio','Images/NavIcons/Port.png'));
            midDivLinks.push(mobileLinks('Booking','Images/NavIcons/Book.png'));
  
  
    DOMTarget.append(navOutter,navPush);
      navOutter.append(nav);
        nav.append(cont);
          cont.append(mail,midDiv);
            midDivLinks.forEach(element => {midDiv.append(element);});
}