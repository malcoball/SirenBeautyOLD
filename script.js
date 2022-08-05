function makeElm(type,className = "",idName = "",textCont = ""){
    const element = document.createElement(type);
    if (className != "") element.className = className;
    if (idName != "") element.id = idName;
    if (textCont != "") element.innerHTML = textCont;
 

    return element;
};
function Footer(){
  const out = document.querySelector("footer");

    const div1 = makeElm('div','innerDiv col2');
      const header1 = makeElm('h4',"","","Siren Beauty Nottingham");
      const header2 = makeElm('h5',"","","sirenbeautynottingham@gmail.com");
      const imageDiv = makeElm('div',"",'imageDiv');
        const fbLink = makeElm('a',"",'face');
        fbLink.href="#";
        const inLink = makeElm('a',"",'inst');
        inLink.href="#";
      const header3 = makeElm('h5',"","",'c2022 by Siren Beauty Nottingham.');
  out.append(div1);
  div1.append(header1,header2,imageDiv,header3);
  imageDiv.append(fbLink,inLink);
}
function Nav(){
  const out = document.querySelector("nav");

  const cont = makeElm('div',"",'navCont');
    const mail = makeElm('a',"","",'sirenbeautynottingham@gmail.com');
    mail.href = "#";
    const midDiv = makeElm('div');
      const home = makeElm('a',"","",'Home');
      mail.href = "#";
      const services = makeElm('a',"","",'Services');
      services.href="#";
      const port = makeElm('a',"","","Portfolio");
      port.href="#";
      const book = makeElm('a',"","",'How to book');
      book.href="#";

  out.append(cont);
  cont.append(mail,midDiv);
  midDiv.append(home,services,port,book);
}

Footer();
Nav();