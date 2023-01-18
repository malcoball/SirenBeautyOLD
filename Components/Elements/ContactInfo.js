import makeElm from "../MakeElm.js";

function area(divName,imageSrc,titleText,descriptionText){
    const cont = makeElm('div',divName + ' contDiv');
      const topDiv = makeElm('div','topDiv');
      const bottomDiv = makeElm('div','botDiv');
      const imgSpan = makeElm('span','imgSpan');
      const icon = makeElm('img');
        imageSrc !== null ? icon.src = imageSrc : icon.alt = "image";

      const title = makeElm('h4',"","",titleText);
      const desc = makeElm('p',"","",descriptionText);
    //   cont.append(icon,title,desc);
      cont.append(topDiv,bottomDiv);
        imgSpan.append(icon);
        topDiv.append(imgSpan,title);
        bottomDiv.append(desc);
    return cont;
}

export default function ContactInfo (mainTitleText = "Listen to me!!"){
    const out = makeElm('div','contactDiv');
    out.style.backgroundImage = "url('Images/contactBack.jpg')";
        const inner = makeElm('div','contactContainer');

      const mainTitle = makeElm('h3',"","",mainTitleText);
      const Phone = area('phoneArea',"Images/NavIcons/Phone.png",'Phone - Text','07743124969');
      const Email = area('emailArea',"Images/NavIcons/Mail.png",'Email','sirenbeautynottingham@gmail.com');
      const Address = area('addressArea',"Images/NavIcons/Map.png",'Address','10B Highstreet,<br> Hucknall,<br>Nottingham<br>NG15 7HD');
      out.append(inner);
        inner.append(mainTitle,Email,Phone,Address);
    return out;
}