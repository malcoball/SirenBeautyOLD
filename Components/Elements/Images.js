// Can be used to generate either a div with a background image or an img element
import makeElm from "../MakeElm.js";

// Kinda cba to keep doing image paths so this will save that
const rootFolder = '../../Images/';
const ImgElm = (imgName,width,height,className,id) =>{
    const imgElm = makeElm('img',className,id);

    imgElm.src = rootFolder + imgName;

    if (width !== null)         imgElm.style.width = width;
    if (height !== null)        imgElm.style.height = height;

    return imgElm;
}
const ImgDiv = (imgName, className, id)=>{
    const imgDiv = makeElm('div',className,id);
    imgDiv.style.backgroundImage = `url(${rootFolder + imgName})`;

    return imgDiv;
}
const imgSrc = (imgName)=>{
    // Fills in the src info to save headaches later, YOU'RE WELCOME!!
    return rootFolder + imgName;
}

export {ImgElm, ImgDiv, imgSrc};