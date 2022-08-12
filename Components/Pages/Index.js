import makeElm from "../MakeElm.js";
import EmailForm from "../Elements/EmailForm.js";
import Map from "../Elements/Map.js"
import ContactInfo from "../Elements/ContactInfo.js";

export default function Index(DOMTarget){
    const topSpace = makeElm('div',"",'topSpacing');
    // topSpace.style.backgroundImage = 'url("Images/cardImage.jpg")';
    topSpace.style.backgroundImage = 'url("Images/portBackground.jpg")';

    const section = makeElm('section',"text-primary col1 home");
      const secDiv = makeElm('div',"innerDiv col1");
        const header1 = makeElm('h1',"","",'Welcome to Siren Beauty Nottingham');
        const header2 = makeElm('h5',"","",'<i>Enabling you to feel your best self</i>');
        const header3 = makeElm('h5',"","",'Siren Beauty Nottingham is a sole team and idea of one. Emma specialises in semi permanent make up and prides herself on really listening to what the client wants. Our ideas of beauty are as unique as the people sat in our company')
      
    const midSpace = makeElm('div',"",'midSpacing');
    const article = makeElm('article',"col1");
      const artDiv = makeElm('div','innerDiv col1');
        const header4 = makeElm('h5',"","","<i>We're waiting For You!</i>");
        const header5 = makeElm('h5',"","",'Fridays 10 till 8');
  
    const botSpace = makeElm('div',"",'bottomSpacing');

    // Form area
    const formCont = makeElm('div','formCont');

      const mapDiv = makeElm('div','mapDiv','map');
      const contact = ContactInfo("Contact");

      formCont.append(contact,EmailForm(null,false),mapDiv);
  
    DOMTarget.append(topSpace,section,midSpace,article,botSpace,formCont);
      section.append(secDiv);
        secDiv.append(header1,header2,header3);
      article.append(artDiv);
        artDiv.append(header4,header5);

        const mapTarget = document.querySelector('#map');
        Map(mapTarget);
}