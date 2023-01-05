import makeElm from "../../MakeElm.js";
import ContactInfo from "../../Elements/ContactInfo.js";
import EmailForm from "../../Elements/EmailForm.js";

const FormCont = ()=>{
    const formCont = makeElm('div','formCont');

      const mapDiv = makeElm('div','mapDiv','map');
      const contact = ContactInfo("Contact");

      formCont.append(contact,EmailForm(null,false),mapDiv);

    return formCont;
}

export default FormCont;