// TODO: Optimise

const knob_y = document.querySelector("#knob-y");
const knob_x = document.querySelector("#knob-x");

let knob_y_rotation = 0;
let curser_y_last = 0;

let knob_x_rotation = 0;
let curser_x_last = 0;


document.addEventListener("mousemove", (event) => {
    let mY = event.clientY;
    let mX = event.clientX;

    if(!knob_y_rotation && !knob_x_rotation) {
        knob_x_rotation = mX
        knob_y_rotation = mY
    }

    // Logic for the Y axis
    if (mY > curser_y_last) {
        knob_y_rotation += (mY - curser_y_last) / 2;
    } else {
        knob_y_rotation -= (curser_y_last - mY) / 2;
    }
    curser_y_last = mY

    // Logic for the X axis
    if (mX > knob_x_rotation) {
        knob_x_rotation += (mX - knob_x_rotation) / 3.5;
    } else {
        knob_x_rotation -= (curser_x_last - mX) / 3.5;
    }
    curser_x_last = mX

    rotateKnobs()
})

function rotateKnobs() {
    knob_y.style.transform = `rotate(${knob_y_rotation}deg)`;
    knob_x.style.transform = `rotate(${knob_x_rotation}deg)`;
}