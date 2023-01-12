import makeElm from "../../MakeElm.js";
import { ImgDiv } from "../Images.js";

const ThumbnailImage = (imgSrc,active = false, key)=>{
    // const thumbnailImage = makeElm('div',`carouselThumbnail`);
    // if (active == true) thumbnailImage.classList.add('active');
    const thumbnailImage = ImgDiv(imgSrc,'carouselThumbnail',key);
    if (active == true) thumbnailImage.classList.add('active');

    return thumbnailImage;
}
export default ThumbnailImage;