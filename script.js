// Set the date we're counting down to
var countDownDate = new Date().getTime();
countDownDate -= 120;

console.log(countDownDate);
let x;
function stopping() {
    clearInterval(window.x);
    document.getElementById("start").disabled  = false;
    document.getElementById("stop").disabled  = true;
}

function starting() {
    document.getElementById("start").disabled  = true;
    document.getElementById("stop").disabled  = false;
    window.x = setInterval (function starting() {
        var now = new Date().getTime();
        var distance = now - countDownDate;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
},1000)

}