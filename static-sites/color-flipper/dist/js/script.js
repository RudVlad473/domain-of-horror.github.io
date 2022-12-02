var previousColor = 0;
const colorNames = Object.keys(colorsList); 
const button = document.getElementById('identifier');
const colorSpan = document.getElementById('current-color');

function changeBgColor() {
    let randomColor = Math.round(Math.random() * 100) % colorNames.length;
    
    while(randomColor == previousColor) {
        randomColor = Math.round(Math.random() * 100) % colorNames.length;
    }
    
    document.body.style.backgroundColor = colorNames[randomColor];
    changeColorDisplayName(colorNames[randomColor]);
    previousColor = randomColor;
}

function changeColorDisplayName(colorName) {
    colorSpan.style.color = colorSpan.innerHTML =  
    (button.innerHTML === 'Human') ? colorName : (
        colorsList[colorName][Math.round(Math.random())] 
    )
}

function isHumanReadable(str) {
    return /[#(]/.test(str);
}

function toggleButton() {
    const robot = ['Robot', 'white', 'black', 'Silkscreen'];
    const human = ['Human', 'black', 'white', 'Poppins'];
    const logo = document.getElementById('logo');
    document.getElementById('logo').style.fontFamily = colorSpan.style.fontFamily = 
    (button.innerHTML === "Human") ? 'Silkscreen' : 'Poppins';

    (button.innerHTML === "Human") ?
    (
        [
            button.innerHTML, 
            button.style.color, 
            button.style.backgroundColor, 
            button.style.fontFamily
        ] = robot

    ) :
    (
        [
            button.innerHTML, 
            button.style.color, 
            button.style.backgroundColor, 
            button.style.fontFamily
        ] = human
    )
    
}
