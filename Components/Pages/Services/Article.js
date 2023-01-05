import makeElm from "../../MakeElm.js";
import ServiceCard from "../../Elements/ServiceCard.js";

const Article = ()=>{

    const article = makeElm('article','col1 ');
        const container = makeElm('div','cardDiv');
            article.append(container);
        container.append(ServiceCard("Powder/Ombre Brows","£150 inc top up","Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 months",'url("Images/cardImageOmbre.jpg")'));
        container.append(ServiceCard("MICROBLADED BROWS","£150 inc top up","The au natual look” Strokes are strategically placed using a manual tool to mimick the brows natural hairs. Results can be expected to last 12 months",'url("Images/cardImageMicro.jpg")'));
        container.append(ServiceCard("COMBINATION BROWS","£150 inc top up","Skin is packed with pigment to enhance Colour for the lips. Perfectly compliments fillers for extra wow factor.",'url("Images/cardImageCombo.jpg")'));
        container.append(ServiceCard("LIP BLUSH COMING SOON!","£150 inc top up","Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 months",'url("Images/cardImageLip.jpg")'));
        container.append(ServiceCard("MICRONEEDLING / collagens induction therepy","£40 or 3 sessions £100","This treatment results in new fresh glowing skin. Creating tiny controlled injuries in the skin allows the healing process to take form. As this happens the skin is rejuvenated with new skin cells and makes the face appear more youthful. A series of treaments are reccomended for best results.",'url("Images/cardImageMicroN.jpg")'));
        container.append(ServiceCard("REMOVALS","From £40 per session, Emergency removal £150","Removals: To remove old or unwanted permanent make up or small body tattoos. A specialised solution is tattooed into the skin to cause an osmotic reaction to lift and fade unwanted pigment. Emergency removals have to to done within 48 hours of treatment.",'url("Images/cardImageRemoval.jpg")'));

    return article;
}
export default Article;