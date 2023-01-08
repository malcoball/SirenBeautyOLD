import makeElm from "../../MakeElm.js";
import ThumbnailImage from "./ThumbnailImage.js";

const ImagePreview = (imgSrcs = [],active = 0)=>{
    // Display all the images for the carousel
    const imagePreview = makeElm('div','imagePreviewCont');
    // This is where the
    const imgs = [];

    for (let i = 0; i < imgSrcs.length; i++){
        let out = {src : imgSrcs[i].src, active : false};
        if (active == i) {
            out.active = true;
            console.log('matched')
        }
        imgs.push(out);
    }

    // const img1 = ThumbnailImage();
    // const img2 = ThumbnailImage();
    // const img3 = ThumbnailImage();
    // imagePreview.append(img1,img2,img3);
    imgs.forEach(element => {
        console.log("current : ",element)
        imagePreview.append(ThumbnailImage(element.src,element.active))
    });
    return imagePreview;
}
export default ImagePreview;