const cardList = document.querySelector("[data-js='card-list']");
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

  const cardBox = document.createElement("li");
  cardBox.classList.add("card__item");
  cardList.append(cardBox);

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList = "card__bookmark-button";
  cardBox.append(bookmarkButton);

  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.src = "img/bookmark_add.svg";
  bookmarkIcon.alt = "Add to bookmarks";
  bookmarkIcon.classList = "card__bookmark-icon";
  bookmarkButton.append(bookmarkIcon);

  const cardQuestion = document.createElement("p");
  cardQuestion.classList = "card__question";
  cardQuestion.textContent = event.target.question.value;
  cardBox.append(cardQuestion);

  const revealButton = document.createElement("button");
  revealButton.classList = "card__reveal-button";
  revealButton.dataset.js = "reveal-button";
  revealButton.textContent = "Show answer";
  cardBox.append(revealButton);

  const cardAnswer = document.createElement("p");
  cardAnswer.classList = "card__answer";
  cardAnswer.dataset.js = "answer";
  cardAnswer.textContent = event.target.answer.value;
  cardBox.append(cardAnswer);

  const tagList = document.createElement("ul");
  tagList.classList = "card__tag-list";
  cardBox.append(tagList);

  const tagListItem = document.createElement("li");
  tagList.append(tagListItem);

  const tagListItemLink = document.createElement("a");
  tagListItemLink.classList = "card__tag";
  tagListItemLink.href = "#" + event.target.tag.value;
  tagListItemLink.textContent = "#" + event.target.tag.value;
  tagListItem.append(tagListItemLink);

  revealButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (cardAnswer.style.visibility === "visible") {
      cardAnswer.style.visibility = "hidden";
      revealButton.textContent = "Show answer";
    } else {
      cardAnswer.style.visibility = "visible";
      revealButton.textContent = "Hide answer";
    }
  });

  setTimeout(() => cardBox.classList.add("card__item__enter"), 0);
});

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
