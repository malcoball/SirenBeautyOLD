export const SavePage = (pageName)=>{
    // Save the current page for refresh, so it refreshes to the right pages
    localStorage.setItem("pageName",pageName);
};
export const LoadPage = ()=>{
    // Load it in duh
    // Does it exist?
    let page = localStorage.getItem("pageName");
    console.log(page," : loaded in");
    return page;
}