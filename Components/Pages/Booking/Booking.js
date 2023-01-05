import makeElm from "../../MakeElm.js";
import Map from "../../Elements/Map.js";
import Section from "./Section/Section.js";
import MidSpace from "./MidSpace.js";
import Article from "./Article.js"

export default function Booking(DOMTarget){
    // const section = makeElm('section');
    const section = Section();
    const midSpace = MidSpace();
    
    const article = Article();

  
    DOMTarget.append(section,midSpace,article);

      
  }