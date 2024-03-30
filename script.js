const container = document.querySelector("#container");
const gridContainer = document.createElement("div");
const inputSize = document.createElement("input");
const inputHeader = document.createElement("h4");
inputHeader.textContent = "Enter size, 1-100 (ex: 16 creates a 16x16 grid)";
inputSize.setAttribute("type","text");
inputSize.setAttribute("placeholder","Default: 16");
inputSize.style.cssText = "background-color: white; color: black; margin-bottom: 40px";



const clearButton = document.createElement("button");
clearButton.addEventListener("click", () => {
    gridContainer.innerHTML = '';
});
const createButton = document.createElement("button");
createButton.addEventListener("click", () => {
    
    createGrid(inputSize.value);
});
clearButton.style.backgroundColor="red";
clearButton.style.color="black";
clearButton.textContent="Clear Grid";
createButton.style.backgroundColor="cyan";
createButton.style.color="black";
createButton.textContent="Create Grid";

container.appendChild(inputHeader);
container.appendChild(clearButton);
container.appendChild(createButton);
container.appendChild(inputSize);
container.appendChild(gridContainer);

let size = inputSize.value;


let createGrid = function(size = 16) {
    gridContainer.innerHTML = '';
    //for loop for rows
    for (let x = 0; x < size; x++) {
        const row = document.createElement('div');
        row.setAttribute("class", "row")
        gridContainer.appendChild(row);
        //for loop for each column/box, filling the current row.
        for (let y = 0; y < size; y++) {
            const column = document.createElement('div');
            column.setAttribute("class", "box");
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "white";
            });
        }
        
    }
}



