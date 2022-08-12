import makeElm from "../MakeElm.js";
import EmailForm from "../Elements/EmailForm.js";
import Map from "../Elements/Map.js";
export default function Booking(DOMTarget){
    const section = makeElm('section');
      const secLeftDiv = makeElm('div','leftDiv');
        const title = makeElm('h3',"","",'come visit us');
        const para1 = makeElm('p',"","",'Please email for a free consultation and to set your appointment time.');
        const para2 = makeElm('p',"","",'Levanas 10B High street HucknallNottingham NG15');
        const para3 = makeElm('a',"","",'sirenbeautynottingham@gmail.com');
        para3.href = "_mailto : sirenbeautynottingham@gmail.com";
      const secRightDiv = makeElm('div','rightDiv');
        const emailForm = EmailForm(false,null,"col2");
    const midSpace = makeElm('div','midSpace');
     midSpace.style.backgroundImage = 'url("Images/cardImage.jpg")';
    const article = makeElm('article');
      // article.style.backgroundImage = 'url("Images/map.jpg")';
      const mapOut = makeElm('div',"",'map');

  
    DOMTarget.append(section,article);
      section.append(secLeftDiv,secRightDiv);
        secLeftDiv.append(title,para1,para2,para3);
        secRightDiv.append(emailForm);
      article.append(mapOut);

      const mapTarget = document.querySelector('#map');
        Map(mapTarget);
  }