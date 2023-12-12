let rotation = 0;
let rotation_speed = 0.25;
let rotation_shift = 0.005;
let rotation_max = 1;
let rotation_min = 0.1;
let radius = 50;

function init_task6() {
    let timerId = setInterval(function () {
        rotation += rotation_speed;
        if (rotation >= 360.0) rotation -= 360.0;
        let block1 = document.getElementById('block1');
        let block2 = document.getElementById('block2');
        let block1x = radius * Math.cos(rotation * Math.PI / 180);
        let block1y = radius * Math.sin(rotation * Math.PI / 180);
        let block2x = -block1x;
        let block2y = -block1y;
        block1.style.transform = "translate(" + block1x + "px, " + block1y + "px) rotate(" + rotation + "deg)";
        block2.style.transform = "translate(" + block2x + "px, " + block2y + "px) rotate(" + (rotation + 180) + "deg)";
        //change rotation speed
        rotation_speed += rotation_shift;
        if ((rotation_speed >= rotation_max) || (rotation_speed <= rotation_min)) {
            rotation_shift = -rotation_shift;
        }
    }, 10);
    
    let timerId2 = setInterval(function () {
        let block3 = document.getElementById('block3');
        block3.style.transform = "translate(75px, 75px) rotate(" + 2 * rotation + "deg)";
    }, 10);
}