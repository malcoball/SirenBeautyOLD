import makeElm from "../MakeElm.js";

export default function Footer(){
    const out = document.querySelector("#app");
      const footer = makeElm('footer');
        const div1 = makeElm('div','innerDiv col2');
          const header1 = makeElm('h4',"","","Siren Beauty Nottingham");
          const header2 = makeElm('h5',"","","sirenbeautynottingham@gmail.com");
          const imageDiv = makeElm('div',"",'imageDiv');
            const fbLink = makeElm('a',"",'face');
            fbLink.href="https://www.facebook.com/SirenBeautyNottingham";
            fbLink.target = "_blank";
            fbLink.style.backgroundImage = 'url("Images/facebook.png")';
            const inLink = makeElm('a',"",'inst');
            inLink.href="https://www.instagram.com/sirenbeautynottingham/";
            inLink.target = "_blank";
            inLink.style.backgroundImage = 'url("Images/instagram.png")';
          const header3 = makeElm('h5',"","",'c2022 by Siren Beauty Nottingham.');
    out.append(footer);
      footer.append(div1);
      div1.append(header1,header2,imageDiv,header3);
      imageDiv.append(fbLink,inLink);
}