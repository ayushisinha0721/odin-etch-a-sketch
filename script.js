const container = document.querySelector('.container');

createNewGrid = (size) => {
    for(let i = 0; i<size*size; i++) {
        let div = document.createElement('div');
        div.classList.add('grid');
        // div.textContent = i;
        div.style.width = (100/size) + "%";
        container.appendChild(div);
    }
}

hoverOn = () => {
    const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.classList.add('hovered');
        grid.style.background = "red";
    })
})
}

createNewGrid(16);
hoverOn();


const button = document.querySelector('button');
button.addEventListener("click", () => {
    let size  = prompt("Enter the dimensions of the new grid");
    if(size == null) {
        return;
    }
    if(size > 100) {
        window.alert("Number must be below 100");
        return;
    }
    container.textContent = '';
    createNewGrid(size);
    hoverOn();
})