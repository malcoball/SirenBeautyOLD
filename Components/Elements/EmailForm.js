import makeElm from "../MakeElm.js";

export default function EmailForm(DOMTarget,addToDOM = true, color = "col1"){
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
      DOMTarget.append(outterDiv);
    } else {
      return outterDiv;
    }
        
  
  }