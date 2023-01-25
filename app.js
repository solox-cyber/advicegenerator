const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

const url = "https://api.adviceslip.com/advice";

async function getAdvice(){
    const res = await fetch(url);
    const { slip:{id, advice} } = await res.json();
    adviceId.innerText = id;
    adviceText.innerText = advice; 
}
getAdvice();

generateBtn.addEventListener("click",getAdvice)