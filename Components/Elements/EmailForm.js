import makeElm from "../MakeElm.js";
const emailTarget = 'sirenbeautynottingham@gmail.com';

function requiredInput(target,check){
  target.addEventListener("blur",()=>{
    const parent = target.parentNode;
    let valid = true;
    if (check === "name"){
      if (target.value === "") valid = false;
    } else 
    if (check === "email"){
      if (target.value.indexOf("@") === -1) valid = false;
    }
    if (valid === false) parent.classList.add('required');
  })

  target.addEventListener("focus",()=>{
    const parent = target.parentNode;
    parent.classList.remove('required');
  })
}
function homeURL(){
  // Just using this because the url might change
  return document.URL;
}
const emailSort = ()=>{
  const nameTarget = document.querySelector('#nameInput');
  const msgTarget = document.querySelector('#textInput');
  const hiddenTarget = document.querySelector('#messageValue');
  const msg = 'Name : '+ nameTarget.value + '\nMessage : ' + msgTarget.value;
  hiddenTarget.value = msg;
}
const sendEmail = ()=>{
  emailSort();
  const formId = document.querySelector('#EmailForm');

  formId.submit();
}

export default function EmailForm(DOMTarget,addToDOM = true, color = "col1"){
    const outterDiv = makeElm('div',`${color} inputContainer`);
      const innerDiv = makeElm('div',`innerDiv ${color} inputLeft`,'EmailFormCont');
        const form = makeElm('form',`form ${color}`,'EmailForm');
        form.action=`https://formsubmit.co/${emailTarget}`;
        form.method = 'POST';
          // Title of the form
          const header1 = makeElm('h2',"","",'Come Visit Us');
          const div1 = makeElm('div','formInCont');
            const div1Cont = makeElm('div','inputRequired')
              // Name input
              const div11 = makeElm('div','inputArea');
                const header11 = makeElm('h5',"","",'Name *');
                const input11  = makeElm('input','input','nameInput');
                input11.placeholder = "required";
                // Email input
                const div21 = makeElm('div','inputArea');
                const header21 = makeElm('h5',"","",'Email *');
                const input21 = makeElm('input','input');
                input21.placeholder = "required";
                input21.name = "email";
                requiredInput(input11,"name");
                requiredInput(input21,"email");
            // Subject input
            const div31 = makeElm('div','inputArea');
              const header31 = makeElm('h5',"","",'Subject');
              const input31 = makeElm('input','input single','subjectInput');
              input31.placeholder = "optional";
              input31.name="_subject";
            // Text Area
            const div41 = makeElm('div','inputArea');
              const header41 = makeElm('h5',"","",'Message');
              const input41 = makeElm('textarea','input single','textInput');
              input41.placeholder = "optional";
            // Used to combine the text and name
            const hiddenValue = makeElm('input','','messageValue');
            hiddenValue.type = 'hidden'; hiddenValue.name = 'message';
            // Disable captcha
            const disable = makeElm('input');
            disable.type = 'hidden'; disable.name='_captcha'; disable.value='false';
            // After post
            const next = makeElm('input');
            next.type = 'hidden'; next.name='_next'; next.value=homeURL();
            // Button
            const div51 = makeElm('div',"",'btnDiv');
              const btnDiv = makeElm('div','','btnDivInner');
              const input51 = makeElm('h5',"","",'Submit');
              input51.addEventListener("click",()=>{
                
                sendEmail();
              })
  
              outterDiv.append(innerDiv);
          innerDiv.append(form);
            form.append(header1,div1,disable,next,hiddenValue);
              div1.append(div1Cont,div31,div41,div51);
                div1Cont.append(div11,div21);
                div11.append(header11,input11);
                div21.append(header21,input21);
                div31.append(header31,input31);
                div41.append(header41,input41);
                div51.append(btnDiv);
                  btnDiv.append(input51);
    if (addToDOM === true){
      DOMTarget.append(outterDiv);
    } else {
      return outterDiv;
    }
        
  
  }