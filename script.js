const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

noBtn.addEventListener("mouseover", () => {
    const containerWidth = questionContainer.offsetWidth;
    const containerHeight = questionContainer.offsetHeight;

    const newX = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth));
    const newY = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
});
