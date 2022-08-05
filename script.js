function makeElm(type,className = "",idName = "",textCont = ""){
    const element = document.createElement(type);
    if (className != "") element.className = className;
    if (idName != "") element.id = idName;
    if (textCont != "") element.innerHTML = textCont;
 

    return element;
};
function Nav(){
  const out = document.querySelector("#app");

  const navOutter = makeElm('div',"",'navOutter');
    const nav = makeElm('nav');
      const cont = makeElm('div',"",'navCont');
        const mail = makeElm('a',"","",'sirenbeautynottingham@gmail.com');
        mail.href = "#";
        const midDiv = makeElm('div');
          const home = makeElm('a',"","",'Home');
          home.href = "#";
          const services = makeElm('a',"","",'Services');
          services.href="#";
          const port = makeElm('a',"","","Portfolio");
          port.href="#";
          const book = makeElm('a',"","",'How to book');
          book.href="#";

  out.append(navOutter);
  navOutter.append(nav);
  nav.append(cont);
  cont.append(mail,midDiv);
  midDiv.append(home,services,port,book);
}
function Index(){
  const out = document.querySelector("#app");

  const topSpace = makeElm('div',"",'topSpacing');
  const section = makeElm('section',"text-primary col1");
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

  out.append(topSpace,section,midSpace,article,botSpace);
    section.append(secDiv);
      secDiv.append(header1,header2,header3);
    article.append(artDiv);
      artDiv.append(header4,header5);

}
function EmailForm(){
  const outterDiv = makeElm('div','col1 inputContainer');
    const innerDiv = makeElm('div','innerDiv col inputLeft');
      const form = makeElm('form',"",'EmailForm');
        // Title of the form
        const header1 = makeElm('h2',"","",'Come Visit Us');
        const div1 = makeElm('div','inputRequired');
          // Name input
          const div11 = makeElm('div');
            const header11 = makeElm('h5',"","",'Name *');
            const input11  = makeElm('input','input');
          // Email input
          const div21 = makeElm('div');
            const header21 = makeElm('h5',"","",'Email *');
            const input21 = makeElm('input','input');
          // Subject input
          const div31 = makeElm('div');
            const header31 = makeElm('h5',"","",'Subject');
            const input31 = makeElm('input','input single','subjectInput');
          // 
          const div41 = makeElm('div');
            const header41 = makeElm('h5',"","",'Message');
            const input41 = makeElm('textarea','input single','textInput');
          const div51 = makeElm('div');
            const input51 = makeElm('button',"","",'Submit');

  const out = document.querySelector("#app");
    out.append(outterDiv);
      outterDiv.append(innerDiv);
        innerDiv.append(form);
          form.append(header1,div1);
            div1.append(div11,div21,div31,div41,div51);
              div11.append(header11,input11);
              div21.append(header21,input21);
              div31.append(header31,input31);
              div41.append(header41,input41);
              div51.append(input51);

}
function Footer(){
  const out = document.querySelector("#app");
    const footer = makeElm('footer');
      const div1 = makeElm('div','innerDiv col2');
        const header1 = makeElm('h4',"","","Siren Beauty Nottingham");
        const header2 = makeElm('h5',"","","sirenbeautynottingham@gmail.com");
        const imageDiv = makeElm('div',"",'imageDiv');
          const fbLink = makeElm('a',"",'face');
          fbLink.href="#";
          const inLink = makeElm('a',"",'inst');
          inLink.href="#";
        const header3 = makeElm('h5',"","",'c2022 by Siren Beauty Nottingham.');
  out.append(footer);
    footer.append(div1);
    div1.append(header1,header2,imageDiv,header3);
    imageDiv.append(fbLink,inLink);
}


Nav();
Index();
EmailForm();
Footer();