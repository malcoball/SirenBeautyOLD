import makeElm from "../MakeElm.js";

export default function ScreenCover(){
    const fadeTime = 1000; // How long the screencover lasts. The script.js needs to be changed to match though
    const out = makeElm('div',"",'screenCover');
    out.style.animationDuration = fadeTime / 1000 + "s";
    setTimeout(()=>{
        out.remove()
    },fadeTime);
    return out;
}