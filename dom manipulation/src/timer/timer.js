let count = 0;
let time = null;
const startTimer = () => {
    count++;
    countValue.innerText = `Time : ${count}`;
};

const createTimer = () => {
    const timerContainer = document.createElement("div");
    const timerHeading = document.createElement("h1");
    const timerPara = document.createElement("p");
    const startButton = document.createElement("button");
    const stopButton = document.createElement("button");
    const resetButton = document.createElement("button");

    timerContainer.classList.add("timerContainer");
    timerHeading.classList.add("timerHeading");
    timerPara.id = "countValue";
    startButton.id = "start";
    stopButton.id = "stop";
    resetButton.id = "reset"

    timerHeading.innerText = "Timer";
    timerPara.innerText = `Time : ${count}`;
    startButton.innerText = "start";
    stopButton.innerText = "stop";
    resetButton.innerText = "reset";

    startButton.addEventListener('click', () => {
        time = setInterval(startTimer, 1000);
    });
    stopButton.addEventListener('click', () => {
        if (time) clearInterval(time);
        time = null;
    });
    resetButton.addEventListener('click', () => {
        if (time) clearInterval(time);
        count=0;
        countValue.innerText = `Time : ${count}`;
        
    })
    timerContainer.appendChild(timerHeading);
    timerContainer.appendChild(timerPara);
    timerContainer.appendChild(startButton);
    timerContainer.appendChild(stopButton);
    timerContainer.appendChild(resetButton);

    const rootDiv = document.getElementById("root");
    rootDiv.appendChild(timerContainer);
}
createTimer();