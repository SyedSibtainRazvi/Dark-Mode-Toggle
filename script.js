const inputElement = document.querySelector(".input");
const bodyElement = document.querySelector("body");

const text = document.querySelector(".name");

inputElement.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if (inputElement.checked) {
        bodyElement.style.background = "black";
        text.innerText = "Dark-Mode On";
        text.style.color ="White";
    } else {
        bodyElement.style.background = "white";
        text.innerText = "Light-Mode On";
        text.style.color ="Black";

    }
}

inputElement.addEventListener("input", () => {
    updateBody();;
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputElement.checked));
} 

