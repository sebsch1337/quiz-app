import createCard from "./components/card/card.js";
import cards from "./db.js";

const cardList = document.querySelector("[data-js='card-list']");

const bookmarkedCards = cards.filter((card) => card.isBookmarked);

bookmarkedCards.forEach((card) => {
  const newCard = createCard(card.question, card.answer, card.tag, true);
  cardList.append(newCard);
});
