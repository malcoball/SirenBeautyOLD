import makeElm from "../../MakeElm.js";

const Section = ()=>{
    const section = makeElm('section',"text-primary col1 home");
    const secDiv = makeElm('div',"innerDiv col1");
      const header1 = makeElm('h1',"","",'Welcome to Siren Beauty Nottingham');
      const header2 = makeElm('h5',"","",'<i>Enabling you to feel your best self</i>');
      const header3 = makeElm('h5',"","",'Siren Beauty Nottingham is a sole team and idea of one. Emma specialises in semi permanent make up and prides herself on really listening to what the client wants. Our ideas of beauty are as unique as the people sat in our company')
    section.append(secDiv);
        secDiv.append(header1,header2,header3);

    return section;
}

export default Section;