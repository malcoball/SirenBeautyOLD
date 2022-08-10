function ServiceCard(titleText,subHeadText,paraText,imageSrc){
    const mainCon = makeElm('div','cardContainer col2');
      const leftCon = makeElm('div','leftDiv cardDiv');
        const leftConSpace = makeElm('div','leftDivInner');
          const title = makeElm('h3',"",'title',titleText);
          const subHead = makeElm('h5',"",'subHead',subHeadText);
          const para    = makeElm('p',"","",paraText);
      const rightCon = makeElm('div','rightDiv cardDiv');
        if (imageSrc === null) imageSrc = 'url("Images/cardImage.jpg")';
        rightCon.style.backgroundImage = imageSrc;

    mainCon.append(leftCon,rightCon);
      leftCon.append(leftConSpace);
        leftConSpace.append(title,subHead,para);
    
    return mainCon;
}