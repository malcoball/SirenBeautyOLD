import makeElm from "../../MakeElm.js";

const Section = ()=>{
    const section = makeElm('section','text-primary col1');
      const secDiv = makeElm('div','innerDiv col1');
        const header1 = makeElm('h3',"","",'Services');
        const header2 = makeElm('h5',"","",'All treatments include a consultation so we can both understand each other in what can be achieved and discuss what is right for you. ');
    section.append(secDiv);
        secDiv.append(header1,header2);
    return section;
}
export default Section;