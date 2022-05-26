// Set the date we're counting down to

let x;
var countDownDate1 = new Date("Jan 5, 2024 15:37:25").getTime();
var countDownDate2 = new Date("Jan 5, 2024 15:39:25").getTime();
let distance = countDownDate2 - countDownDate1;
function stopping() {
    clearInterval(window.x);
    document.getElementById("start").disabled  = false;
    document.getElementById("stop").disabled  = true;
}

function starting() {
    document.getElementById("start").disabled  = true;
    document.getElementById("stop").disabled  = false;
        window.x = setInterval (function starting() {
          distance--;
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        },1000)
}