const grid = document.querySelector("#grid-container");
const grid_size = document.querySelector("#grid-size");

// Button selectors
const change_canvas_size_btn = document.querySelector("#change_canvas_size_btn");
const clear_canvas_btn = document.querySelector("#clear_canvas_btn");

// Button event listeners
change_canvas_size_btn.addEventListener("click", () => changeCanvasSize());
clear_canvas_btn.addEventListener("click", () => generateGrid());

// Holds the grid size after user sets it
let currentGridSize;

// Initial defalt Grid size (before user sets it)
const DEFAULT_GRID_SIZE = 16;

// Get new Grid size
const changeCanvasSize = () => {
    const newSize = prompt(
        "Enter a new canvas size.\n" +
        "Min = 5 \n" +
        "Max = 100"
    )

    // If cancel is clicked
    if (!newSize) {
        return
    }

    // If invalid number, attempt again.
    if (!Number.isInteger(parseInt(newSize)) || ((parseInt(newSize) < 5 || parseInt(newSize) > 100))) {
        changeCanvasSize();
        return;
    }

    currentGridSize = newSize;
    console.log(`New Grid Size: ${currentGridSize}`)
    generateGrid();
};

const generateGrid = () => {
    grid.innerHTML = "";

    // If a size has not been set, use the defualt size of 16 x 16
    let gridSize = currentGridSize || DEFAULT_GRID_SIZE;

    // Update the UI to reflect current grid size
    grid_size.innerText = `${gridSize} x ${gridSize}`;

    // Calculation for how many blocks are needed
    const block_count = Math.pow(gridSize, 2)

    // Pizel size for canvas
    const grid_width_height = 764;

    grid.style.height = grid_width_height + "px";
    grid.style.width = grid_width_height + "px";

    for (let i = 0; i < block_count; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-block");
        // div.innerText = i; // Debugging

        div.addEventListener("mouseover", () => {
            div.classList.add("colour_block");
            let currentOpacity = window.getComputedStyle(div, null).getPropertyValue("opacity");
            // Increment Opacity by 0.1
            div.style.opacity = parseFloat(currentOpacity) + 0.1;            
        })

        div.style.height = grid_width_height / gridSize + "px";
        div.style.width = grid_width_height / gridSize + "px";

        grid.appendChild(div)
    }
};

// Callable
generateGrid(16);

