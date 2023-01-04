import makeElm from "../MakeElm.js";
// import ServiceCard from "./ServiceCard.js";
import ServiceCard from "../Elements/ServiceCard.js";
export default function Services(DOMTarget){
    const section = makeElm('section','text-primary col1');
      const secDiv = makeElm('div','innerDiv col1');
        const header1 = makeElm('h3',"","",'Our Service Menu');
        const header2 = makeElm('h5',"","",'All treatments include a consultation so we can both understand each other in what can be achieved and discuss what is right for you. ');
  
    const cards = makeElm('article','col1');
    cards.append(ServiceCard("Powder/Ombre Machine Brows","£150 inc top up","Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 months",'url("Images/cardImageOmbre.jpg")'));
    cards.append(ServiceCard("MICROBLADED BROWS","£150 inc top up","The au natual look” Strokes are strategically placed using a manual tool to mimick the brows natural hairs. Results can be expected to last 12 months",'url("Images/cardImageMicro.jpg")'));
    cards.append(ServiceCard("COMBINATION BROWS","£150 inc top up","Skin is packed with pigment to enhance Colour for the lips. Perfectly compliments fillers for extra wow factor.",'url("Images/cardImageCombo.jpg")'));
    cards.append(ServiceCard("LIP BLUSH COMING SOON!","£150 inc top up","Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 months",'url("Images/cardImageLip.jpg")'));
    cards.append(ServiceCard("MICRONEEDLING","£40 or 3 sessions £100","Also known as collagens induction therepy. This treatment results in new fresh glowing skin. Creating tiny controlled injuries in the skin allows the healing process to take form. As this happens the skin is rejuvenated with new skin cells and makes the face appear more youthful. A series of treaments are reccomended for best results.",'url("Images/cardImageMicroN.jpg")'));
    cards.append(ServiceCard("REMOVALS","From £40 per session,<br> Emergency removal £150","NEEDS TO BE UPDATED",'url("Images/cardImageRemoval.jpg")'));
    cards.append(ServiceCard("REMOVALS","From £40 per session,<br> Emergency removal £150","NEEDS TO BE UPDATED",'url("Images/cardImageRemoval2.jpg")'));
  
    DOMTarget.append(section,cards);
      section.append(secDiv);
        secDiv.append(header1,header2);
  }