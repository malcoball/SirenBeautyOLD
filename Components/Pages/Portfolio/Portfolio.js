import Section from "./Section.js"
import Background from "./Background.js";

export default function Portfolio(DOMTarget){
    const section = Section();
    const background = Background();

    DOMTarget.append(section,background);
  }