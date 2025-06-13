const container = document.querySelector('.container');

for(let i = 0; i<256; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    // div.textContent = i;
    container.appendChild(div);
}

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.classList.add('hovered');
        grid.style.background = "red";
    })
})