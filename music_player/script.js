// Like button code
const like_btn_list = document.getElementsByClassName("like-btn");

const like_btn = [...like_btn_list];
// console.log(like_btn);

like_btn.forEach(element => {
    element.style.cursor = "pointer";
    element.addEventListener("click",()=>{
        element.style.color = "red";
    });
});