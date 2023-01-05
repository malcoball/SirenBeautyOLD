import makeElm from "../../MakeElm.js";

const Article = ()=>{
    const article = makeElm('article',"col1");
      const artDiv = makeElm('div','innerDiv col1');
        const header4 = makeElm('h5',"","","<i>We're waiting For You!</i>");
        const header5 = makeElm('h5',"","",'Fridays 10 till 8');

    article.append(artDiv);
        artDiv.append(header4,header5);
    return article;
}
export default Article;