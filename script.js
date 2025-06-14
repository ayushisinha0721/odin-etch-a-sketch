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

let squareNumber = 0.0;

hoverOn = () => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            let RColor = Math.floor(Math.random()*256);
            let GColor = Math.floor(Math.random()*256);
            let BColor = Math.floor(Math.random()*256);
            grid.style.backgroundColor = `rgb(${RColor}, ${GColor}, ${BColor})`;
            // grid.style.backgroundColor = "black";

            if(squareNumber < 1.0) {
                squareNumber += 0.1;
                grid.style.opacity = squareNumber;
            } else {
                grid.style.opacity = 1.0;
            }

            grid.classList.add('hovered');
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
    squareNumber = 0.0;
    createNewGrid(size);
    hoverOn();
})