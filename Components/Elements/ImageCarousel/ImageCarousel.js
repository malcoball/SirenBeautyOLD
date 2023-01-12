import makeElm from "../../MakeElm.js";
import ImageContainer from "./ImageContainer.js";
import ImagePreview from "./ImagePreview.js";
import { imgSrc } from "../Images.js";
import images from "./ImageObjs.js"; // Where to go to add/change the images

const FadeTime = 2000; // in ms, so 1000 = 1s
let mouse = false; // If the mouse is hovering or not essentially, esstially.
let play = true; // Used for the automatic scroll, turn off when don't wanna play it.
let animType = 0; // 0 = swipe, 1 = fade, anything else throws error
let swipeDirection = true; // true right <- left, false left -> right. Only applies for swipe ofcourse
let fadeDistance = 200; // Basically how far the swipe animation is
if (animType == 1) fadeDistance = 0;



let pics = [0,1,2]; // Works as ids for the images, don't touch pls

const getImageLeft = ()=>{
    const target = document.querySelectorAll('.carouselImg');
    return target[1].offsetLeft;
}
const positionImages = ()=>{
    const imgs = document.querySelectorAll('.carouselImg');
    // Put left,right behind the active img
    const left = getImageLeft(); const top = imgs[1].offsetTop;
    imgs[0].style.left = left-fadeDistance+"px"; imgs[2].style.left = fadeDistance+left+"px";
    imgs[0].style.top = top+"px"; imgs[2].style.top = top+"px";
    imgs[0].style.width = imgs[1].clientWidth+"px";
    imgs[2].style.width = imgs[1].clientWidth+"px";
    imgs[0].classList.add('hide');
    imgs[2].classList.add('hide');

}
const setZIndex = ()=>{
    const imgs = document.querySelectorAll('.carouselImg');
    imgs[1].style.zIndex = 2;
    imgs[0].style.zIndex = 1;
    imgs[2].style.zIndex = 1;

}


const init = ()=>{
    positionImages();
    autoSwipe();
    mouseDetect();
    thumbnailClick();
    // setZIndex();
}
const getInt = (active)=>{
    const length = images.length-1;
    if (active < 0) active = length;
    if (active > length) active = 0;
    return active;
}
const nextImage = ()=>{
    positionImages();
    // Fade out, then run all of this
    const imgs = document.querySelectorAll('.carouselImg');
    imgs[1].style.animationDuration = FadeTime / 1000 + 's';
    // Fading in animation
    if (animType == 1){
        imgs[1].classList.add('fadeOut');
        if (swipeDirection == true){
            imgs[0].classList.add('hide');
            imgs[2].classList.remove('hide');
        } else {
            imgs[2].classList.add('hide');
            imgs[0].classList.remove('hide');
        }
    } else {
    // Swiping in animation
    let target = 0;
        if (swipeDirection == true){
            // Swipe left
            target = 2;
        }
        let imgTarget = imgs[target];
        imgTarget.classList.add('swipeIn');
        imgTarget.classList.remove('hide');
        imgTarget.style.zIndex = '2';
        imgTarget.style.transitionDuration = FadeTime / 1000 + 's';
        imgTarget.style.left = getImageLeft()+'px';
    }
    setTimeout(()=>{
        if (animType == 1){
            imgs[1].classList.remove('fadeOut');
        } else{
            let target = 0;
            if (swipeDirection == true){
                target = 2;
            }
            let imgTarget = imgs[target];
            imgTarget.classList.remove('swipeIn');
            imgTarget.classList.add('hide');
            imgTarget.style.transitionDuration = '0s';
            imgTarget.style.zIndex = '-1';
            imgTarget.style.left = getImageLeft() + fadeDistance + 'px';
        }
        let dir;
        swipeDirection == true ? dir = 1 : dir = -1;
    
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
    if (play == true){
        setTimeout(()=>{
            if (mouse == false){
                nextImage();
            }
            autoSwipe();
        },5000);
    }
}
const thumbnailClick = ()=>{
    // Get target
    const DOMTarget = document.querySelectorAll('.imagePreviewCont .carouselThumbnail');
    // See the trigger
    DOMTarget.forEach(elm =>{
        elm.addEventListener("click",(e)=>{
            let key = parseInt(e.target.id);
            pics = [getInt(key-3),getInt(key-2),getInt(key-1)];
            changeImage('right',images[key-1]);
            nextImage();
            changeThumbnail(pics[2])
        })
    })
}
const mouseDetect = ()=>{
    const DOMTarget = document.querySelector('.carouselCont');
    console.log(DOMTarget);
    DOMTarget.onmouseenter = ()=>{
        mouse = true;
    }
    DOMTarget.onmouseleave = ()=>{
        mouse = false;
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
            init();
            btn1.addEventListener("click",()=>{
                nextImage(false,'swipe');
            })
            btn2.addEventListener("click",()=>{
                nextImage(true,'swipe');
            })
        },10);
    return imageCarousel;
}
export default ImageCarousel;