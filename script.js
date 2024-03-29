const container = document.querySelector("#container")
const grid = [];

let size = 16;


//for loop for rows
for (let x = 0; x < size; x++) {
    const row = document.createElement('div');
    row.setAttribute("class", "row")
    container.appendChild(row);
    for (let y = 0; y < size; y++) {
        const column = document.createElement('div');
        column.setAttribute("class", "box");
        row.appendChild(column);
        
    }
    
}