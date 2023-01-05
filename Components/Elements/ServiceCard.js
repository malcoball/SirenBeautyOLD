import makeElm from "../MakeElm.js";

export default function ServiceCard(titleText,subHeadText,paraText,imageSrc){
    const mainCon = makeElm('div','cardContainer col2');
      const leftCon = makeElm('div','leftDiv innerCardCont');
        const leftConSpace = makeElm('div','leftDivInner');
          const title = makeElm('h3',"",'title',titleText);
          const subHead = makeElm('h5',"",'subHead',subHeadText);
          const para    = makeElm('p',"","",paraText);
      const midCon = makeElm('div','midDiv');
      const rightCon = makeElm('div','rightDiv innerCardCont');
        const backImage = makeElm('div','rightDivImage');

        if (imageSrc === null) imageSrc = 'url("Images/cardImage.jpg")';
        backImage.style.backgroundImage = imageSrc;

    mainCon.append(leftCon,midCon,rightCon);
      leftCon.append(leftConSpace);
        leftConSpace.append(title,subHead,para);
      rightCon.append(backImage);
    
    return mainCon;
}