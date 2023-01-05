import makeElm from "../../../MakeElm.js";
import EmailForm from "../../../Elements/EmailForm.js";

const RightDiv = ()=>{
    const rightDiv = makeElm('div','rightDiv');
        const emailForm = EmailForm(false,null,"col2");
    rightDiv.append(emailForm);
    return rightDiv;
}

export default RightDiv;