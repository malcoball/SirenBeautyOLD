import makeElm from "../../../MakeElm.js";

const LeftDiv = ()=>{
    const leftDiv = makeElm('div','leftDiv');
        const title = makeElm('h3',"","",'come visit us');
        const para1 = makeElm('p',"","",'Please email for a free consultation and to set your appointment time.');
        const para2 = makeElm('p',"","",'Levanas 10B High street HucknallNottingham NG15');
        const para3 = makeElm('a',"","",'sirenbeautynottingham@gmail.com');
        // para3.href = "_mailto : sirenbeautynottingham@gmail.com";
        leftDiv.append(title,para1,para2,para3);

    return leftDiv;
}

export default LeftDiv;