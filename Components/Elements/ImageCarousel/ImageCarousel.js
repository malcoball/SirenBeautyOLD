import makeElm from "../../MakeElm.js";
import ImageContainer from "./ImageContainer.js";
import ImagePreview from "./ImagePreview.js";
import { imgSrc } from "../Images.js";

const FadeTime = 2000; // in ms, so 1000 = 1s
const fadeDistance = 200; // Basically how far the swipe animation is

const getImageLeft = ()=>{
    const target = document.querySelectorAll('.carouselImg');
    return target[1].offsetLeft;
}
const positionImages = ()=>{
    const imgs = document.querySelectorAll('.carouselImg');
    // Put left,right behind the active img
    const left = getImageLeft(); const top = imgs[1].offsetTop;
    imgs[0].style.left = fadeDistance-left+"px"; imgs[2].style.left = fadeDistance+left+"px";
    imgs[0].style.top = top+"px"; imgs[2].style.top = top+"px";
    imgs[0].style.width = imgs[1].clientWidth+"px";
    imgs[2].style.width = imgs[1].clientWidth+"px";
    imgs[0].classList.add('hide');
    imgs[2].classList.add('hide');

    console.log("width : ",imgs[1].clientWidth)
}
const images = [];
class Image{
    constructor(title,src,desc){
        this.title = title;
        this.desc = desc;
        this.src = src + '.jpg';
        images.push(this);
    }
}
new Image('picture0','cardImageMicro','Hope this looks good');
new Image('picture1','cardImageMicroN','Not sure what to put really lulz');
new Image('picture2','cardImageCombo',"This is a short description");
new Image('picture3','cardImageOmbre','Now this one, oh boy. This is the longest description one may ever see for something isnt going to be used and also how can I put so much with saying so little? Now fitting this wont be the problem but making it all consistent may be a challenge');
new Image('Globe yo','map','Just a picture of a globe really, nothing else to it.');
new Image('The Big Sea','contactBack','I wonder if people would say the sea here is just grey.');

let pics = [0,1,2];
const getInt = (active)=>{
    const length = images.length-1;
    if (active < 0) active = length;
    if (active > length) active = 0;
    return active;
}
const nextImage = (fwd = true,type = 'fade')=>{
    positionImages();
    // Fade out, then run all of this
    const imgs = document.querySelectorAll('.carouselImg');
    imgs[1].style.animationDuration = FadeTime / 1000 + 's';
    if (type == 'fade'){
        imgs[1].classList.add('fadeOut');
        if (fwd == true){
            imgs[0].classList.add('hide');
            imgs[2].classList.remove('hide');
        } else {
            imgs[2].classList.add('hide');
            imgs[0].classList.remove('hide');
        }
    } else {
        if (fwd == true){
            imgs[2].classList.remove('hide');
            imgs[2].style.zIndex = '2';
            imgs[2].style.transitionDuration = FadeTime / 1000 + 's';
            imgs[2].style.left = getImageLeft()+'px';
        }else {
            imgs[0].classList.remove('hide');
            imgs[0].style.zIndex = '2';
            imgs[0].style.transitionDuration = FadeTime / 1000 + 's';
            imgs[0].style.left = getImageLeft()+'px';
        }
    }
    setTimeout(()=>{
        if (type == 'fade'){
            imgs[1].classList.remove('fadeOut');
        } else{
            if (fwd == true){
                imgs[2].classList.add('hide');
                imgs[2].style.transitionDuration = '0s';
                imgs[2].style.zIndex = '-1';
                imgs[2].style.left = getImageLeft() + fadeDistance + 'px';
            } else {
                imgs[0].classList.add('hide');
                imgs[0].style.transitionDuration = '0s';
                imgs[0].style.zIndex = '-1';
                imgs[0].style.left = getImageLeft() + fadeDistance + 'px';
            }
        }
        let dir;
        fwd == true ? dir = 1 : dir = -1;
    
        let out = [];
        const targets = ['left','active','right'];
    
        for (let i = 0; i < 3; i++){
            out.push(getInt(pics[i]+dir));
        }
        pics = out;
        for (let i = 0; i < 3; i++){
            let int = pics[i];
            changeImage(targets[i],images[int]);
        }

        // Change the active preview box
        changeThumbnail(pics[1]);
    },FadeTime- (FadeTime/20));

}
const changeImage = (target,imgObj)=>{
    const imgTarget = document.querySelector(`.imageContainer .${target} .carouselImgInner .imgDiv`);
    const titleTarget = document.querySelector(`.imageContainer .${target} .carouselImgInner .imgTitle`);
    const descTarget = document.querySelector(`.imageContainer .${target} .carouselImgInner .imgDesc`);

    imgTarget.style.backgroundImage     = `url(${imgSrc(imgObj.src)})`;
    titleTarget.innerHTML   = imgObj.title;
    descTarget.innerHTML    = imgObj.desc;

}
const changeThumbnail = (active)=>{
    // Just a change of classes
    // Remove the active
    document.querySelector(`.imagePreviewCont .active`).classList.remove('active');
    document.querySelectorAll('.carouselThumbnail')[active].classList.add('active');
}
const autoSwipe = ()=>{
    const swipe = true;
    if (swipe == true){
        setTimeout(()=>{
            nextImage(true,'swipe');
            autoSwipe();
        },5000);
    }
}


const ImageCarousel = ()=>{
    // Create the HTML elements
    const imageCarousel = makeElm('div','carouselCont');
        const activeDiv     = makeElm('div','activeDiv');
          const imgCont     = makeElm('div','imageContainer');
          const leftImage = ImageContainer('left',images[pics[0]]);
          const activeImage = ImageContainer('active',images[pics[1]]);
          const rightImage = ImageContainer('right',images[pics[2]]);
        const previewDiv = ImagePreview(images , pics[1]);
        const btn1 = makeElm('button','btnLeft','','back');
        const btn2 = makeElm('button','btnRight','','fwd');
        imageCarousel.append(activeDiv,previewDiv,btn1,btn2);
            activeDiv.append(imgCont);
                imgCont.append(leftImage,activeImage,rightImage);



        // Where to add any interactive bits, gives the DOM chance to init
        setTimeout(()=>{
            positionImages();
            autoSwipe();
            btn1.addEventListener("click",()=>{
                nextImage(false,'swipe');
            })
            btn2.addEventListener("click",()=>{
                nextImage(true,'swipe');
            })
        },1000);
    return imageCarousel;
}
export default ImageCarousel;