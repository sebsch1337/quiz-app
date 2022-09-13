import createCard from "./components/card/card.js";

const cardList = document.querySelector("[data-js='card-list']");

const cards = [
  {
    question: "How much is the fish?",
    answer: "Hyper Hyper!",
    tag: "scooter",
    isBookmarked: false,
  },
  {
    question: "Is the sun shining?",
    answer: "No, we're in Germany.",
    tag: "weather",
    isBookmarked: true,
  },
];

cards.forEach((card) => {
  const newCard = createCard(card.question, card.answer, card.tag);
  cardList.append(newCard);
});
