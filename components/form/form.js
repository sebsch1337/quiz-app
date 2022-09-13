const questionText = document.querySelector("[data-js='question-text']");
const answerText = document.querySelector("[data-js='answer-text']");
const questionCounter = document.querySelector(
  "[data-js='question-text-counter']"
);

const answerCounter = document.querySelector("[data-js='answer-text-counter']");
questionText.addEventListener("input", countCharacters);
answerText.addEventListener("input", countCharacters);

function countCharacters(event) {
  const counter = 150 - event.target.value.length;
  if (event.target.dataset.js === "question-text") {
    questionCounter.textContent = `${counter} characters left`;
    if (counter === 0) {
      questionCounter.classList.add("card__form__counter--red");
    } else {
      questionCounter.classList.remove("card__form__counter--red");
    }
  } else {
    answerCounter.textContent = `${counter} characters left`;
    if (counter === 0) {
      answerCounter.classList.add("card__form__counter--red");
    } else {
      answerCounter.classList.remove("card__form__counter--red");
    }
  }
}

export default countCharacters;
