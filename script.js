const container = document.querySelector("#container");
const containerSize = 600;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;
let size = 16;

for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.style.width = `${containerSize / size}px`;
    grid.style.height = `${containerSize / size}px`;
    grid.style.border = "1px solid black";
    container.appendChild(grid);
}


let grids = document.querySelectorAll("#container div");
grids.forEach(grid => {
    let alpha = 0; // Each grid gets its OWN alpha
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    grid.addEventListener("mouseover", () => {
        alpha += 0.1;
        if (alpha >= 1) alpha = 0;
        grid.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    });
});