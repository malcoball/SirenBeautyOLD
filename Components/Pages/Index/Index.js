import makeElm from "../../MakeElm.js";
import Map from "../../Elements/Map.js"
import Section from "./Section.js";
import FormCont from "./FormCont.js";
import ImageCarousel from "../../Elements/ImageCarousel/ImageCarousel.js";


export default function Index(DOMTarget){
    const topSpace = makeElm('div','','topSpacing');
    const imageCarousel = ImageCarousel();
    const section = Section();
    const midSpace = makeElm('div',"",'midSpacing');
    const botSpace = makeElm('div',"",'bottomSpacing');

    // Form area
    const formCont = FormCont();
  
    DOMTarget.append(topSpace,section,imageCarousel,formCont);

        const mapTarget = document.querySelector('#map');
        Map(mapTarget);
}