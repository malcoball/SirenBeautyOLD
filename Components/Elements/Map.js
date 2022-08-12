import makeElm from "../MakeElm.js";

export default function GMap(DOMTarget,className = ""){
    // Need the id to be map. Guess google ain't too good afterall lulz
    const out = makeElm('div',className,'map',"map div here pls");
    DOMTarget.append(out);
    initMap();
}