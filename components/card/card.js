function createCard(questionValue, answerValue, tagValue, isBookmarked) {
  const cardBox = document.createElement("li");
  cardBox.classList.add("card__item");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList = "card__bookmark-button";
  cardBox.append(bookmarkButton);

  const bookmarkIcon = document.createElement("img");
  if (isBookmarked) {
    bookmarkIcon.src = "img/bookmarked.svg";
    bookmarkIcon.alt = "Remove from bookmarks";
  } else {
    bookmarkIcon.src = "img/bookmark_add.svg";
    bookmarkIcon.alt = "Add to bookmarks";
  }
  bookmarkIcon.classList = "card__bookmark-icon";
  bookmarkButton.append(bookmarkIcon);

  const cardQuestion = document.createElement("p");
  cardQuestion.classList = "card__question";
  cardQuestion.textContent = questionValue;
  cardBox.append(cardQuestion);

  const revealButton = document.createElement("button");
  revealButton.classList = "card__reveal-button";
  revealButton.dataset.js = "reveal-button";
  revealButton.textContent = "Show answer";
  cardBox.append(revealButton);

  const cardAnswer = document.createElement("p");
  cardAnswer.classList = "card__answer";
  cardAnswer.dataset.js = "answer";
  cardAnswer.textContent = answerValue;
  cardBox.append(cardAnswer);

  const tagList = document.createElement("ul");
  tagList.classList = "card__tag-list";
  cardBox.append(tagList);

  const tagListItem = document.createElement("li");
  tagList.append(tagListItem);

  const tagListItemLink = document.createElement("a");
  tagListItemLink.classList = "card__tag";
  tagListItemLink.href = "#" + tagValue;
  tagListItemLink.textContent = "#" + tagValue;
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
  return cardBox;
}

export default createCard;
