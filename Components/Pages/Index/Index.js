import makeElm from "../../MakeElm.js";
import Map from "../../Elements/Map.js"
import Section from "./Section.js";
import Article from "./Article.js";
import FormCont from "./FormCont.js";


export default function Index(DOMTarget){
    const topSpace = makeElm('div','','topSpacing');;
    const section = Section();
    const midSpace = makeElm('div',"",'midSpacing');
    const botSpace = makeElm('div',"",'bottomSpacing');

    // Form area
    const formCont = FormCont();
  
    DOMTarget.append(topSpace,section,midSpace,botSpace,formCont);

        const mapTarget = document.querySelector('#map');
        Map(mapTarget);
}