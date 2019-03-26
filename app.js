myApp = {};

myApp.spin = () => {
    let turn = 0;
    let click = 0;
    $('.handle').on('click', function () {
        turn += 180 + (`${turn}` / 4);
        click += 1;
        $('.wheel').css({ "transform": `rotate(${turn}deg)` })
        console.log(click);
        console.log(turn);
    });
};


$(document).ready(function () {
    myApp.spin();
})
