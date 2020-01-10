let tipChange = 0;

// creating first grid of 16 x 16
createBox(16);

function createBox(num)
{
    for (let i = 0; i < num; i++)
    {
        for (let j = 0; j < num; j++)
        {
            const container = document.querySelector('.container');
            const div = document.createElement('div');
            div.classList.add('box');
            div.style.height = (512/num) + 'px';
            div.style.width = (512/num) + 'px';
            container.appendChild(div);
        }
    }
}

let reset = document.querySelector('.reset');
reset.addEventListener('click', resetColor);

let colorChangeBtn = document.querySelector('.colorChange');
colorChangeBtn.addEventListener('click', colorChange);

function resetColor() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(boxes => boxes.style.backgroundColor ='lightgray');
    const promptBoxes = prompt("Enter number of boxes: ");
    const container = document.querySelector('.container');
    container.innerHTML = "";
    createBox(promptBoxes);
    tipChange = 0;
    mouseover();
}

function colorChange() {
    tipChange = 1;
    mouseover();
}

// color change function 
function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

// listing to the mouseover and changing color to black
function mouseover() {
    let box = document.querySelectorAll('.box');
    if (tipChange === 0) {
        box.forEach(box => box.addEventListener('mouseenter', blackOut));
    }
    else {
        box.forEach(box => box.addEventListener('mouseenter', setRandomColor));
    }
}

function blackOut(e) {
    this.style.backgroundColor = 'black';
}

function setRandomColor(e) {
    this.style.backgroundColor = getRandomColor();
}

mouseover();