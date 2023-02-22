import makeElm from "../../MakeElm.js";
import ServiceCard from "../../Elements/ServiceCard.js";
import Section from "./Section.js";
import Article from './Article.js';
import ImageCarousel from "../../Elements/ImageCarousel/ImageCarousel.js";
export default function Services(DOMTarget){
    const section = Section();
    const imageCarousel = ImageCarousel();
    const cards = Article(); // Wasn't sure to keep this called cards but yea

  
    DOMTarget.append(section,imageCarousel,cards);

  }