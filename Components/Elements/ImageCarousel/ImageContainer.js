import makeElm from "../../MakeElm.js";
import { ImgDiv } from "../Images.js";

const ImageContainer = (position,imageIn)=>{
    const imageContainer = makeElm('div',`carouselImg ${position}`);
        const innerContainer = makeElm('div',`carouselImgInner`)
            const imgDiv = ImgDiv(imageIn.src,'imgDiv');
            const txtDiv = makeElm('div','textDiv');
                const title = makeElm('h4','imgTitle','',imageIn.title);
                const desc = makeElm('p','imgDesc','',imageIn.desc);
    imageContainer.append(innerContainer);
      innerContainer.append(imgDiv,txtDiv);
        txtDiv.append(title,desc);
    return imageContainer;
}

export default ImageContainer;