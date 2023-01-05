import makeElm from "../../../MakeElm.js";
import LeftDiv from "./LeftDiv.js";
import RightDiv from "./RightDiv.js";
const Section = ()=>{
    const section = makeElm('section');
    const leftDiv = LeftDiv();
    const rightDiv = RightDiv();
    // const rightDiv = RightDiv();
        section.append(leftDiv,rightDiv);
    return section;
}

export default Section;