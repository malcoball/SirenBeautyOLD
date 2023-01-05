import makeElm from "../../MakeElm.js";
import ServiceCard from "../../Elements/ServiceCard.js";
import Section from "./Section.js";
import Article from './Article.js';
export default function Services(DOMTarget){
    const section = Section();
  
    const cards = Article(); // Wasn't sure to keep this called cards but yea

  
    DOMTarget.append(section,cards);

  }