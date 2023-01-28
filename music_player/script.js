let searchBar = document.querySelector(".search-bar");
let navSearch = document.querySelector(".nav-search");

searchBar.style.visibility = "hidden";
navSearch.addEventListener("click", ()=>{
    searchBar.style.visibility = "visible";
});