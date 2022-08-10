const DOMTarget = document.querySelector("#app");
function makeElm(type,className = "",idName = "",textCont = ""){
    const element = document.createElement(type);
    if (className != "") element.className = className;
    if (idName != "") element.id = idName;
    if (textCont != "") element.innerHTML = textCont;
 

    return element;
};

function Nav(){
  const navPush = makeElm('div',"",'navPush');

  const navOutter = makeElm('div',"",'navOutter');
    const nav = makeElm('nav');
      const cont = makeElm('div',"",'navCont');
        const mail = makeElm('a',"","",'sirenbeautynottingham@gmail.com');
        mail.href = "#";
        const midDiv = makeElm('div');
          const home = makeElm('a',"","",'Home');
        //   home.href = "#";
          navLinks(home,"Home")
          const services = makeElm('a',"","",'Services');
        //   services.href="#";
          navLinks(services,"Services")
          const port = makeElm('a',"","","Portfolio");
        //   port.href="#";
          navLinks(port,"Portfolio")
          const book = makeElm('a',"","",'How to book');
        //   book.href="#";
          navLinks(book,"How to book")

  DOMTarget.append(navOutter,navPush);
    navOutter.append(nav);
      nav.append(cont);
        cont.append(mail,midDiv);
          midDiv.append(home,services,port,book);
}


function Index(){
  const topSpace = makeElm('div',"",'topSpacing');
  topSpace.style.backgroundImage = 'url("Images/cardImage.jpg")';

  const section = makeElm('section',"text-primary col1 home");
    const secDiv = makeElm('div',"innerDiv col1");
      const header1 = makeElm('h1',"","",'Welcome to Siren Beauty Nottingham');
      const header2 = makeElm('h5',"","",'<i>Enabling you to feel your best self</i>');
      const header3 = makeElm('h5',"","",'Siren Beauty Nottingham is a sole team and idea of one. Emma specialises in semi permanent make up and prides herself on really listening to what the client wants. Our ideas of beauty are as unique as the people sat in our company')
    
  const midSpace = makeElm('div',"",'midSpacing');
  const article = makeElm('article',"col1");
    const artDiv = makeElm('div','innerDiv col1');
      const header4 = makeElm('h5',"","","<i>We're waiting From You!</i>");
      const header5 = makeElm('h5',"","",'Fridays 10 till 8');

  const botSpace = makeElm('div',"",'bottomSpacing');

  DOMTarget.append(topSpace,section,midSpace,article,botSpace);
    section.append(secDiv);
      secDiv.append(header1,header2,header3);
    article.append(artDiv);
      artDiv.append(header4,header5);

}
function Services(){
  const section = makeElm('section','text-primary col1');
    const secDiv = makeElm('div','innerDiv col1');
      const header1 = makeElm('h3',"","",'Our Service Menu');
      const header2 = makeElm('h5',"","",'All treatments include a consultation so we can both understand each other in what can be achieved and discuss what is right for you. ');

  const cards = makeElm('article','col1');
  cards.append(ServiceCard("Powder/Ombre Machine Brows","£150 inc top up","Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 months",null));
  cards.append(ServiceCard("MICROBLADED BROWS","£150 inc top up","The au natual look” Strokes are strategically placed using a manual tool to mimick the brows natural hairs. Results can be expected to last 12 months",null));
  cards.append(ServiceCard("COMBINATION BROWS","£150 inc top up","Skin is packed with pigment to enhance Colour for the lips. Perfectly compliments fillers for extra wow factor.",null));
  cards.append(ServiceCard("LIP BLUSH COMING SOON!","£150 inc top up","Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 months",null));
  cards.append(ServiceCard("MICRONEEDLING","£40 or 3 sessions £100","Also known as collagens induction therepy. This treatment results in new fresh glowing skin. Creating tiny controlled injuries in the skin allows the healing process to take form. As this happens the skin is rejuvenated with new skin cells and makes the face appear more youthful. A series of treaments are reccomended for best results.",null));

  DOMTarget.append(section,cards);
    section.append(secDiv);
      secDiv.append(header1,header2);
}
function Portfolio(){
  const section = makeElm('section','col1');
    const header = makeElm('h1',"","",'Gallery');
    const para = makeElm('p',"","",'All pigments and tools used are safe, sterile, high end and carefully chosen for the treatments provided.');
    const button = makeElm('button',"","","See Siren Beauty's portfolio");
    button.addEventListener("click",()=>{
      window.open("https://www.instagram.com/sirenbeautynottingham/",'_blank');
    });
  const background = makeElm('background','col1');
    const backgroundInner = makeElm('div',"background")
    backgroundInner.style.backgroundImage = 'url("Images/portBackground.jpg")';

  DOMTarget.append(section,background);
    section.append(header,para,button);
    background.append(backgroundInner);
  
}
function Booking(){
  const section = makeElm('section');
    const secLeftDiv = makeElm('div','leftDiv');
      const title = makeElm('h3',"","",'come visit us');
      const para1 = makeElm('p',"","",'Please email for a free consultation and to set your appointment time.');
      const para2 = makeElm('p',"","",'Levanas 10B High street HucknallNottingham NG15');
      const para3 = makeElm('a',"","",'sirenbeautynottingham@gmail.com');
      para3.href = "_mailto : sirenbeautynottingham@gmail.com";
    const secRightDiv = makeElm('div','rightDiv');
      const emailForm = EmailForm(false,"col2");
  const midSpace = makeElm('div','midSpace');
   midSpace.style.backgroundImage = 'url("Images/cardImage.jpg")';
  const article = makeElm('article');
    // article.style.backgroundImage = 'url("Images/map.jpg")';
    const mapOut = makeElm('div',"",'map');


  DOMTarget.append(section,midSpace,article);
    section.append(secLeftDiv,secRightDiv);
      secLeftDiv.append(title,para1,para2,para3);
      secRightDiv.append(emailForm);
    article.append(mapOut);
}
function EmailForm(addToDOM = true, color = "col1"){
  const outterDiv = makeElm('div',`${color} inputContainer`);
    const innerDiv = makeElm('div',`innerDiv ${color} inputLeft`,'EmailFormCont');
      const form = makeElm('form',`form ${color}`,'EmailForm');
        // Title of the form
        const header1 = makeElm('h2',"","",'Come Visit Us');
        const div1 = makeElm('div','inputRequired');
          // Name input
          const div11 = makeElm('div');
            const header11 = makeElm('h5',"","",'Name *');
            const input11  = makeElm('input','input');
            input11.placeholder = "required";
          // Email input
          const div21 = makeElm('div');
            const header21 = makeElm('h5',"","",'Email *');
            const input21 = makeElm('input','input');
            input21.placeholder = "required";
          // Subject input
          const div31 = makeElm('div');
            const header31 = makeElm('h5',"","",'Subject');
            const input31 = makeElm('input','input single','subjectInput');
            input31.placeholder = "optional";
          // Text Area
          const div41 = makeElm('div');
            const header41 = makeElm('h5',"","",'Message');
            const input41 = makeElm('textarea','input single','textInput');
            input41.placeholder = "optional";
          // Button
          const div51 = makeElm('div',"",'btnDiv');
            const input51 = makeElm('button',"","",'Submit');

            outterDiv.append(innerDiv);
        innerDiv.append(form);
          form.append(header1,div1);
            div1.append(div11,div21,div31,div41,div51);
              div11.append(header11,input11);
              div21.append(header21,input21);
              div31.append(header31,input31);
              div41.append(header41,input41);
              div51.append(input51);
  if (addToDOM === true){
  const out = document.querySelector("#app");
    out.append(outterDiv);
  } else {
    return outterDiv;
  }
      

}
function Footer(){
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