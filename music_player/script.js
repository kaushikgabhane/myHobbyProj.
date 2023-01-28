let searchBar = document.querySelector(".search-bar");
searchBar.style.visibility = "hidden";




let navSearch = document.querySelector(".nav-search");
navSearch.addEventListener("click", ()=>{
    searchBar.style.visibility = "visible";
});