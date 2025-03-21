const maincont = document.querySelector(".main-container");
const changeSizeButton = document.querySelector(".change");
const resetButton = document.querySelector(".reset");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawGame(squares) {
    for (let i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < squares; j++){
            const block = document.createElement("div");
            block.classList.add("block");
            row.appendChild(block);
        }
        maincont.appendChild(row);
    }
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = getRandomColor();
        })
    });
}

let squareCount = 16;

function changeSize() {
    squareCount = parseInt(prompt("Insert the size of grid between 2 and 100!"));
    while (true) {
        if ((squareCount < 101 && squareCount > 1) && typeof squareCount === 'number') {
            break;
        }
        console.log(squareCount);
        alert("pick a valid number, between 2 and 100");
        squareCount = parseInt(prompt("Insert the size of grid between 2 and 100!"));
        console.log(squareCount);
    }
    main(squareCount);
}

function main(squares) {
    while (maincont.firstChild) {
        maincont.removeChild(maincont.lastChild);
    }
    drawGame(squares);
}

resetButton.addEventListener("click", () => {main(squareCount);});
changeSizeButton.addEventListener("click", changeSize);

main(16);