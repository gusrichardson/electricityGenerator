myApp = {};

myApp.start;

myApp.spin;

myApp.glow = document.getElementById('glow');

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
    myApp.clicks = 0;
    $('#ratchet').on('click', function () {
        turn += 180 + (`${turn}` / 4);
        myApp.clicks += 1;
        $('.wheel').css({ "transform": `rotate(${turn}deg)` })
        console.log(myApp.clicks);
        console.log(turn);
    });
};

myApp.removeHandle = () => {
    clearInterval(myApp.countDown);
    $('.handle').css({ left: '800px' });
}

myApp.filamentAnimation = () => {
    $('.filament').addClass('filamentAnimation');
};



myApp.countDown;

myApp.timer = () => {
    let time = 10;
    const counting = () => {
        time = time - 1;
        console.log(time, "this is the time");
        if (time <= 0 && myApp.clicks >= 5) {
            console.log('whoa lotta clicks!');
            myApp.removeHandle();
            myApp.filamentAnimation();
            $('.glow').addClass('highLightAnimation');
            $('.darkOverlay').addClass('roomHighLight');
        } else if (time <= 0 && myApp.clicks >= 2) {
            console.log('meh');
            myApp.removeHandle();
            myApp.filamentAnimation();
            $('.glow').addClass('medLightAnimation');
            $('.darkOverlay').addClass('roomMedLight');
        } else if (time <= 0 && myApp.clicks < 2) {
            console.log('are you there?');
            myApp.removeHandle();
            myApp.filamentAnimation();
            $('.glow').addClass('lowLightAnimation');
            $('.darkOverlay').addClass('roomLowLight');
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
