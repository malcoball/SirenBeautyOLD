export default function makeElm(type,className = "",idName = "",textCont = ""){
    const element = document.createElement(type);
    if (className != "") element.className = className;
    if (idName != "") element.id = idName;
    if (textCont != "") element.innerHTML = textCont;
 

    return element;
};