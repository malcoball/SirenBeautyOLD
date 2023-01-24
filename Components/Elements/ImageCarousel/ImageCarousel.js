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
const changeImage = (imgObj)=>{
    const imgTarget = document.querySelector(`.carouselCont`);

    imgTarget.style.backgroundImage     = `url(${imgSrc(imgObj.src)})`;
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
        imageCarousel.style.backgroundColor = "red";

        // imageCarousel.style.backgroundImage = images[pics[1]].src;
        const activeDiv     = makeElm('div','activeDiv');
          const imgCont     = makeElm('div','imageContainer');
        const previewDiv = ImagePreview(images , pics[1]);
        imageCarousel.append(previewDiv);
            activeDiv.append(imgCont);



        // Where to add any interactive bits, gives the DOM chance to init
        setTimeout(()=>{
            init();
            // btn1.addEventListener("click",()=>{
            //     nextImage(false,'swipe');
            // })
            // btn2.addEventListener("click",()=>{
            //     nextImage(true,'swipe');
            // })
        },10);
    return imageCarousel;
}
export default ImageCarousel;