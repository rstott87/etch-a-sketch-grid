/* generates original divs that will fill the existing
container*/
const container = document.querySelector('#container');
var slider = document.querySelector('#pixelNum');
var btn = document.querySelector('#clearButton');

slider.addEventListener('change', () => {
    container.innerHTML = '';
    let n = slider.value; 
    createGrid(n); 
    addDivEffects();
});

btn.addEventListener('click', () => {
    container.innerHTML = '';
    createGrid(16);
    addDivEffects(); 
});

/* main function that creates grid */
function createGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 0; i < gridArea; i++) 
    {
        let content = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        content.classList.add('gridDiv');
        container.appendChild(content);
    }
};
/* finds all elements with a class name "gridDiv" and 
applies the included event listeners to them*/    

function addDivEffects () {
    let gridDivs = document.querySelectorAll('.gridDiv');     
    gridDivs.forEach((content)  => { 

    content.addEventListener ('mouseover', () => {
        content.style.backgroundColor = "red";
        content.classList.remove('fader');
        content.classList.add('content');
        });
    
    content.addEventListener ('mouseout', () => {
        content.style.backgroundColor = "white";
        content.classList.remove('content');
        content.classList.add('fader');
        });    
        
    });
};

createGrid(16);
addDivEffects ();