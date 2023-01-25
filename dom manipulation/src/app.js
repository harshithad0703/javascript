// const perfomCounter = () => {
//     createCounter();
// };
// const performTimer = () => {
//     createTimer();
// };
const domManipulation = () => {
    const domClass = document.createElement("div");
    const domHeading = document.createElement("h1");
    const radioClass = document.createElement("div");
    const counterButton = document.createElement("button");
    const timerButton = document.createElement("button");

    domClass.classList.add("domClass");
    domHeading.classList.add("domHeading");
    radioClass.classList.add("radioClass");
    counterButton.id = "counterButton";
    timerButton.id = "timerButton";

    domHeading.innerText = "DOM MANIPULATION";
    counterButton.innerText = "Counter";
    timerButton.innerText = "Timer"

    counterButton.addEventListener('click', () => {
        createCounter();
    });
    timerButton.addEventListener('click', () => {
        createTimer();
    });

    domClass.appendChild(domHeading);
    domClass.appendChild(radioClass);
    domClass.appendChild(counterButton);
    domClass.appendChild(timerButton);

    const rootDiv = document.getElementById("root");
    rootDiv.appendChild(domClass);
};
domManipulation();
