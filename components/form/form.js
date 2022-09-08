const cardForm = document.querySelector("[data-js='card-form']");
const questionText = document.querySelector("[data-js='question-text']");
const answerText = document.querySelector("[data-js='answer-text']");
const tag = document.querySelector("[data-js='tag-input']");
const submitButton = document.querySelector("[data-js='submit-button']");
const questionCounter = document.querySelector(
  "[data-js='question-text-counter']"
);
const answerCounter = document.querySelector("[data-js='answer-text-counter']");

questionText.addEventListener("input", countCharacters);
answerText.addEventListener("input", countCharacters);

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

function countCharacters(event) {
  const counter = 150 - event.target.value.length;
  if (event.target.dataset.js === "question-text") {
    questionCounter.textContent = `${counter} characters left`;
    if (counter === 0) {
      questionCounter.classList.add("card-form__counter--red");
    } else {
      questionCounter.classList.remove("card-form__counter--red");
    }
  } else {
    answerCounter.textContent = `${counter} characters left`;
    if (counter === 0) {
      answerCounter.classList.add("card-form__counter--red");
    } else {
      answerCounter.classList.remove("card-form__counter--red");
    }
  }
}
