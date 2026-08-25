let time = 25 * 60;

let timer;

let sessions = 0;

let totalStudyTime = 0;


/* Start timer */

function startTimer() {

    // Prevent multiple timers
    if (timer) {
        return;
    }

    timer = setInterval(function () {

        if (time <= 0) {

            clearInterval(timer);

            timer = null;

            sessions++;

            totalStudyTime += 25;

            document.getElementById("sessions").innerText = sessions;

            document.getElementById("totalTime").innerText = totalStudyTime;

            alert("🎉 Study session complete!");

            return;
        }


        time--;

        updateDisplay();

    }, 1000);
}


/* Pause timer */

function pauseTimer() {

    clearInterval(timer);

    timer = null;
}


/* Reset timer */

function resetTimer() {

    clearInterval(timer);

    timer = null;

    time = 25 * 60;

    updateDisplay();
}


/* Update timer on screen */

function updateDisplay() {

    let minutes = Math.floor(time / 60);

    let seconds = time % 60;


    let formattedMinutes =
        String(minutes).padStart(2, "0");

    let formattedSeconds =
        String(seconds).padStart(2, "0");


    document.getElementById("timer").innerText =
        formattedMinutes + ":" + formattedSeconds;
}