let timerEl = document.getElementById("timer");
let defuser = document.getElementById("defuser");


let countdown = 10;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "Boom!!";
        clearInterval(intervalId);
    }
}, 1000);

defuser.addEventListener("keydown", function(event) {
    let bombDefusertext = defuser.value;
    if (event.key === "Enter" && bombDefusertext === "defuse" && countdown !== 0) {
        timerEl.textContent = "You did it";
        clearInterval(intervalId)
    }


})