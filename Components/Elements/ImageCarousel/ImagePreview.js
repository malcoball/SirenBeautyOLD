import makeElm from "../../MakeElm.js";
import ThumbnailImage from "./ThumbnailImage.js";

const ImagePreview = (imgSrcs = [],active = 0)=>{
    // Display all the images for the carousel
    const imagePreview = makeElm('div','imagePreviewCont');
    const imgs = [];

    for (let i = 0; i < imgSrcs.length; i++){
        let out = {src : imgSrcs[i].src, active : false};
        if (active == i) {
            out.active = true;
        }
        imgs.push(out);
    }

    let key = 1; // Doesn't pass it as a 0 for some reason
    imgs.forEach(element => {
        imagePreview.append(ThumbnailImage(element.src,element.active,key));
        key ++;
    });
    return imagePreview;
}
export default ImagePreview;