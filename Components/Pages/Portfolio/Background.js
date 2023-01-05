import makeElm from "../../MakeElm.js";

const Background = ()=>{
    const background = makeElm('background','col1');
      const backgroundInner = makeElm('div',"background")
      backgroundInner.style.backgroundImage = 'url("Images/portBackground.jpg")';
    background.append(backgroundInner);
    return background;
}

export default Background;