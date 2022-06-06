var secondHand = document.querySelector('seconds');
var minsHand = document.querySelector('minutes');
var hourHand = document.querySelector('hour');

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = (new Date().getSeconds() * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var mins = now.getMinutes();
    var minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    var hour = now.getHours();
    var hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


    if (secondsDegrees >= 360) {
        secondHand.style.transition = 'none';

    }
}, 1000);
setInterval(getSecondsSinceStartOfDay, 1000);