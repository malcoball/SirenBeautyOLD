import makeElm from "../../MakeElm.js";
import ImageContainer from "./ImageContainer.js";
import ImagePreview from "./ImagePreview.js";
import { imgSrc, ImgDiv } from "../Images.js";
import images from "./ImageObjs.js"; // Where to go to add/change the images


let pic = 1; 

const ImageCarousel = ()=>{
    // Create the HTML elements

        const imgMain = makeElm('div','carouselCont');
        const previewDiv = ImagePreview(images , pic);

            imgMain.append(previewDiv);

    return imgMain;
}
export default ImageCarousel;