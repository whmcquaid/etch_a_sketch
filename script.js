var dimension = 16;
var totalSquares = dimension * dimension;
var i = 0;
const container = document.querySelector("#container");


// builds the grid and gives each pixel basic functionality
function makeGrid() {
    for ( i = 0; i < totalSquares; i++ ) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("blank");
        gridSquare.setAttribute("id", i);
        gridSquare.addEventListener("mouseover", () => {
            gridSquare.classList.remove("blank");
            gridSquare.classList.add("dark");
        })
        container.appendChild(gridSquare);
    }
}
makeGrid();


// reset and resize functionality:
const reset = document.getElementById("reset");
reset.addEventListener("click", function (){
    container.textContent = "";
    resetPixels();
});

function resetPixels() {
    var newDimension = prompt("How many squares wide would you like the new board to be?", "Max 100");
    if ( newDimension != null && newDimension > 0 && newDimension <= 100 ) {
        newDimension = Math.floor(newDimension);
        container.style.gridTemplateColumns = "repeat(" + newDimension + ", 1fr)"
        container.style.gridTemplateRows = "repeat(" + newDimension + ", 1fr)"
    
        totalSquares = newDimension * newDimension;
    
        for ( i = 0; i < totalSquares; i++ ) {
            const pixel = document.createElement("div");
            pixel.classList.add("blank");
            pixel.setAttribute("id", i);
            pixel.addEventListener("mouseover", () => {
                pixel.classList.remove("blank");
                pixel.classList.add("dark");
            })
            container.appendChild(pixel);
        }
    } else {
        alert("Your new dimension must be a number between 1 and 100");
        resetPixels();
    } 
}