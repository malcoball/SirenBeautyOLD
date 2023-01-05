import makeElm from "../../MakeElm.js";

const Section = ()=>{
    const section = makeElm('section','col1');
        const header = makeElm('h1',"","",'Gallery');
        const para = makeElm('p',"","",'All pigments and tools used are safe, sterile, high end and carefully chosen for the treatments provided.');
        const button = makeElm('button',"","","See Siren Beauty's portfolio");
        button.addEventListener("click",()=>{
          window.open("https://www.instagram.com/sirenbeautynottingham/",'_blank');
        });
    section.append(header,para,button);
    return section;
}
export default Section;