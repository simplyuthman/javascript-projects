const count = document.querySelector('.count');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');

add.addEventListener('click', () => {
    count.innerHTML++;
    changeColor();
})

subtract.addEventListener('click', () => {
    count.innerHTML--;
    changeColor();
})

reset.addEventListener('click', () => {
    count.innerHTML = 0;
    changeColor();
})

const changeColor = () => {
    if (count.innerHTML < 0) {
        count.style.color = 'red';
        
    } else if (count.innerHTML > 0) {
        count.style.color = 'white';
    } else {
        count.style.color = 'yellow';
    }
}