let screen = document.querySelector(".screen");
let value = document.createElement("h4");

console.log(screen);

const btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", () => {
    value.innerText = "1";
    screen.appendChild(value);
});