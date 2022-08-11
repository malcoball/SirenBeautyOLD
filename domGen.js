
function Portfolio(){
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
function Booking(){
  const section = makeElm('section');
    const secLeftDiv = makeElm('div','leftDiv');
      const title = makeElm('h3',"","",'come visit us');
      const para1 = makeElm('p',"","",'Please email for a free consultation and to set your appointment time.');
      const para2 = makeElm('p',"","",'Levanas 10B High street HucknallNottingham NG15');
      const para3 = makeElm('a',"","",'sirenbeautynottingham@gmail.com');
      para3.href = "_mailto : sirenbeautynottingham@gmail.com";
    const secRightDiv = makeElm('div','rightDiv');
      const emailForm = EmailForm(false,"col2");
  const midSpace = makeElm('div','midSpace');
   midSpace.style.backgroundImage = 'url("Images/cardImage.jpg")';
  const article = makeElm('article');
    // article.style.backgroundImage = 'url("Images/map.jpg")';
    const mapOut = makeElm('div',"",'map');


  DOMTarget.append(section,midSpace,article);
    section.append(secLeftDiv,secRightDiv);
      secLeftDiv.append(title,para1,para2,para3);
      secRightDiv.append(emailForm);
    article.append(mapOut);
}

