import makeElm from "../MakeElm.js";

export default function Portfolio(DOMTarget){
    const section = makeElm('section','col1');
      const header = makeElm('h1',"","",'Gallery');
      const para = makeElm('p',"","",'All pigments and tools used are safe, sterile, high end and carefully chosen for the treatments provided.');
      const button = makeElm('button',"","","See Siren Beauty's portfolio");
      button.addEventListener("click",()=>{
        window.open("https://www.instagram.com/sirenbeautynottingham/",'_blank');
      });
    const background = makeElm('background','col1');
      const backgroundInner = makeElm('div',"background")
      backgroundInner.style.backgroundImage = 'url("Images/portBackground.jpg")';
  
    DOMTarget.append(section,background);
      section.append(header,para,button);
      background.append(backgroundInner);
    
  }