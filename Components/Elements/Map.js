import makeElm from "../MakeElm.js";

export default function GMap(DOMTarget){
    const out = makeElm('div',"",'map',"map div here pls");
    // initMap()
    DOMTarget.append(out);
    initMap();
}