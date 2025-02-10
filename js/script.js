const grid = document.querySelector("#grid-container");

const clearGrid = () => {
    grid.innerHTML = "";
}

const generateGrid = (gridSize) => {
    clearGrid();

    const gridPow = Math.pow(gridSize, 2)

    grid.style.height = 960 + "px";
    grid.style.width = 960 + "px";

    for (let i = 0; i < gridPow; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-block");
        // div.innerText = i; // Debugging

        div.style.height = 960/gridSize + "px";
        div.style.width = 960/gridSize + "px";

        grid.appendChild(div)
    }
}

// Callable
generateGrid(16);

