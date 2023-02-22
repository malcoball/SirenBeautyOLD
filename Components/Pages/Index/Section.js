import makeElm from "../../MakeElm.js";

const Section = ()=>{
    const section = makeElm('section',"text-primary col1 home");
    const secDiv = makeElm('div',"innerDiv col1");
      const header1 = makeElm('h1',"","",'Welcome to Siren Beauty Nottingham');
      const header2 = makeElm('h5',"","",'<i>When art and science combine to create the beauty of permanent make up….</i>');
      const header3 = makeElm('h5',"","",'Welcome to Siren Beauty, home of your permanent make up artist. Established in 2020 Siren Beauty was set up by Emma to help people fall in love with cosmetic tattoo treatments as she did. Having a passion for giving her clients the best, Emma has trained with multiple talented artists whilst carefully researching and choosing the best methods and products to date. Not only considering how the treatment looks new, but how it will heal and age over time.')
    section.append(secDiv);
        secDiv.append(header1,header2,header3);

    return section;
}

export default Section;