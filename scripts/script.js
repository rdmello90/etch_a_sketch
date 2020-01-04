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

let boxes = document.querySelectorAll('.box');
boxes.forEach(boxes => boxes.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'black';
}));