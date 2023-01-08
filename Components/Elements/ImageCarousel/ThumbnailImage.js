import makeElm from "../../MakeElm.js";
import { ImgDiv } from "../Images.js";

const ThumbnailImage = (imgSrc,active = false)=>{
    // const thumbnailImage = makeElm('div',`carouselThumbnail`);
    // if (active == true) thumbnailImage.classList.add('active');
    const thumbnailImage = ImgDiv(imgSrc,'carouselThumbnail');
    if (active == true) thumbnailImage.classList.add('active');

    return thumbnailImage;
}
export default ThumbnailImage;