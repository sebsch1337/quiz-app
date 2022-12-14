import createCard from "./components/card/card.js";
import cards from "./db.js";

const cardList = document.querySelector("[data-js='card-list']");

cards.forEach((card) => {
  const newCard = createCard(
    card.question,
    card.answer,
    card.tag,
    card.isBookmarked
  );
  cardList.append(newCard);
});
