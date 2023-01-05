import makeElm from "../../MakeElm.js";
import Map from "../../Elements/Map.js";

const Article = ()=>{
    const article = makeElm('article');
        const mapOut = makeElm('div','','map');
        setTimeout(()=>{
            const mapTarget = document.querySelector('#map');
                Map(mapTarget);
                console.log("map loaded in using setTimeout, if problems loading in increase the timer or change the loading method");
        },10);
        


    article.append(mapOut);
    return article;
}

export default Article;