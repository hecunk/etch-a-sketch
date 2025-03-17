


const maincont = document.querySelector(".main-container")

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.style.cssText = "height: 123px; width: 123px; background-color: white; border: solid; border-width: 1px";
    maincont.appendChild(square);
}