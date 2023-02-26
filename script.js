const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.container');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(ballXY.get()).start(ballXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            // mass: 1,
            // damping: 10
        }).start(ballXY);
    });



var nextContainer = document.querySelector('.second-container');
var h = 900; // x vertex, half of total bounce duration
var k = 260; // y vertex, total bounce height
var a = -8 * k / Math.pow(h * 2, 2); // coefficient: -.000483932
var ypos, start, time;

(function drawPosition(timestamp) {
    if (!start) { start = timestamp };
    time = (timestamp) - (start + 800);

    // Position as a function of time, using the vertex form
    // of the quadratic formula:  f(x) = a(x - h)^2 + k,
    // (where [h, k] is the vertex). See it graphically at:
    //    https://www.desmos.com/calculator/i6yunccp7v
    ypos = a * Math.pow(((time + h) % (h * 2) - h), 2) + k;

    nextContainer.style.transform = 'translateY(' + -ypos + 'px)';
    window.requestAnimationFrame(drawPosition);
})(performance.now());

var thirdContainer = document.querySelector('.third-container');
var h = 900; // x vertex, half of total bounce duration
var k = 260; // y vertex, total bounce height
var a = -8 * k / Math.pow(h * 2, 2); // coefficient: -.000483932
var ypos, start, time;

(function drawPosition(timestamp) {
    if (!start) { start = timestamp };
    time = timestamp - (start + 500);
    ypos = a * Math.pow(((time + h) % (h * 2) - h), 2) + k;

    thirdContainer.style.transform = 'translateY(' + -ypos + 'px)';
    window.requestAnimationFrame(drawPosition);
})(performance.now());



var forthContainer = document.querySelector('.forth-container');
var h = 900; // x vertex, half of total bounce duration
var k = 260; // y vertex, total bounce height
var a = -8 * k / Math.pow(h * 2, 2); // coefficient: -.000483932
var ypos, start, time;

(function drawPosition(timestamp) {
    if (!start) { start = timestamp };
    time = timestamp - (start + 700);
    ypos = a * Math.pow(((time + h) % (h * 2) - h), 2) + k;

    forthContainer.style.transform = 'translateY(' + -ypos + 'px)';
    window.requestAnimationFrame(drawPosition);
})(performance.now());



var fifthContainer = document.querySelector('.fifth-container');
var h = 900; // x vertex, half of total bounce duration
var k = 260; // y vertex, total bounce height
var a = -8 * k / Math.pow(h * 2, 2); // coefficient: -.000483932
var ypos, start, time;

(function drawPosition(timestamp) {
    if (!start) { start = timestamp };
    time = timestamp - start;
    ypos = a * Math.pow(((time + h) % (h * 2) - h), 2) + k;

    fifthContainer.style.transform = 'translateY(' + -ypos + 'px)';
    window.requestAnimationFrame(drawPosition);
})(performance.now());



let hourEl = document.querySelector('#hour')
let minuteEl = document.querySelector('#minute')
let secondEl = document.querySelector('#second')
let mode = document.querySelector('.mode')
let body = document.body
let title = document.querySelector('body h1')

function getTime() {

    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    hourEl.innerText = hours;
    minuteEl.innerText = `${minutes < 9 ? `0${minutes}` : minutes}`;
    secondEl.innerText = `${seconds < 9 ? `0${seconds}` : seconds}`;
}

getTime()

setInterval(getTime, 1000)

let isClick = false;
mode.addEventListener('click', () => {

    if (isClick) {
        body.style.backgroundColor = 'black'
        title.style.color = 'white'
        mode.style.backgroundColor = 'white'

        isClick = false
    } else {
        body.style.backgroundColor = 'white'
        title.style.color = 'black'
        mode.style.backgroundColor = 'black'
        isClick = true
    }
})