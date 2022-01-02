let order = [];
let clickedOrder = []
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red ');
const green = document.querySelector('.green ');
const yellow = document.querySelector('.yellow ');

let shuffleOrder = () => {
    let colorOrder = Math.floor(math.random() = 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order(i));
        lightColor(elementColor,Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number*500;

    setTimeout(() =>{
        element.classList.add('select');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('select')
    });
}

// compara os clicks

let checkOrder = () =>{
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
    nextLevel();
    }
}
let click = (color) =>{
    clickedOrder[clickedOrder.length]=color;
    createColorElement(color).classList.add('select');

    setTimeout(() =>{
        createColorElement(color).classList.remove('select');
        checkOrder();
    },250);
}

// function create color
let createColorElement = (color) =>{
    if(color ==0){
        return green;
    }else if(color ==1){
        return red;
    }else if(color ==2){
        return yellow;
    }else if(color ==3){
        return blue;
    }
}

// function next level
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

// function game over
let gameOver = () => {
    alert('Pontuação: ${score}!\nVocê perdeu!\nClique em OK     para reiniciar!');
order = [];
clickedOrder = [];

playGame();

}

let playGame = () => {
    alert('Bem vindo! Iniciando nova partida!');
    score = 0;
    nextLevel();

}

/*green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));*/

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();