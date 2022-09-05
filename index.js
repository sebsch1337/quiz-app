const revealButton = document.querySelector("[data-js=reveal-button]");
const answer = document.querySelector("[data-js=answer]");

revealButton.addEventListener("click", () => {
  if (answer.style.visibility === "visible") {
    answer.style.visibility = "hidden";
    revealButton.textContent = "Show answer";
  } else {
    answer.style.visibility = "visible";
    revealButton.textContent = "Hide answer";
  }
});
