myApp = {};

myApp.start;

myApp.spin;

myApp.start = () => {
    $('#startGame').on('click', function () {
        $('.doorOverlay').css({
            "top": "-100%"
        });
        myApp.timer();
    })
}

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
        document.getElementById('clock').innerHTML = time;
    }
    myApp.countDown = setInterval(counting, 1000);
    console.log(time);
}


$(document).ready(function () {
    myApp.start();
    myApp.spin();

})
