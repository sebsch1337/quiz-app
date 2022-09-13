import createCard from "../card/card.js";

const cardList = document.querySelector("[data-js='card-list']");
const cardForm = document.querySelector("[data-js='card-form']");

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = createCard(
    event.target.question.value,
    event.target.answer.value,
    event.target.tag.value
  );

  cardList.append(newCard);
});

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
