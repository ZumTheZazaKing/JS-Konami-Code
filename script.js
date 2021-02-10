let pressed = [];

const text = document.querySelector('#desc');

const secretCode = 'zumthezazaking';

window.addEventListener('keyup', function(e){

    console.log(e.key);

    pressed.push(e.key);

    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)){

        console.log('DING DING');

        text.innerHTML = 'Bonjour, you have triggered this text by entering the code. Good on you';

    }

    console.log(pressed);

})