myApp = {};

myApp.spin;

myApp.spin = () => {
    let turn = 0;
    let click = 0;
    $('#ratchet').on('click', function () {
        turn += 180 + (`${turn}` / 4);
        click += 1;
        $('.wheel').css({ "transform": `rotate(${turn}deg)` })
        console.log(click);
        console.log(turn);
    });
};

myApp.countDown;

myApp.timer = () => {
    let time = 10;
    const counting = () => {
        time = time - 1;
        console.log(time, "this is the time");
        if (time <= 0) {
            console.log('time is up');
            clearInterval(myApp.countDown);
            $('.handle').css({ left: '800px' });
        }
    }
    myApp.countDown = setInterval(counting, 500);
    console.log(time);
}


$(document).ready(function () {
    myApp.spin();
    // myApp.timer();
})
