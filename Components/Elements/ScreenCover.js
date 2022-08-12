import makeElm from "../MakeElm.js";

export default function ScreenCover(){
    const out = makeElm('div',"",'screenCover');
    console.log("bayyuuumm");
    setTimeout(()=>{
        out.remove()
    },1000);
    return out;
}