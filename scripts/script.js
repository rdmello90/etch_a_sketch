// Loop for inputing grid.
for (let i = 0; i < 16; i++)
{
    for (let j = 0; j < 16; j++)
    {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        // div.innerHTML = '<div></div>';
        div.classList.add('box');
        container.appendChild(div);
    }
}
// listing to the mouseover and changing color to black
let boxes = document.querySelectorAll('.box');
boxes.forEach(boxes => boxes.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'black';
}));


// let reset = document.querySelector('.reset');
// reset.addEventListener('click', function() {
//     boxes.forEach(boxes => boxes.style.backgroundColor = 'lightgray')
// });
// console.log(event);

let reset = document.querySelector('.reset');
reset.addEventListener('click', resetColor);

function resetColor() {
    boxes.forEach(boxes => boxes.style.backgroundColor ='lightgray');
}
