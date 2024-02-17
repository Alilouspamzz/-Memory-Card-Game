let cards = document.querySelectorAll(".card");
let firstCard = null,
  secondCard = null,
  imgSrc1 = null,
  imgSrc2 = null,
  canClick = true,
  scoor = 0;

randCards();
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function flipCard() {
  if (!canClick) return;
  this.classList.add("flip");

  if (firstCard == null) firstCard = this;
  else if (secondCard == null) secondCard = this;

  if (firstCard != null && secondCard != null) isMatching();
}

function isMatching() {
  imgSrc1 = firstCard.firstElementChild.src;
  imgSrc2 = secondCard.firstElementChild.src;
  console.log(imgSrc1, imgSrc2);
  if (imgSrc1 === imgSrc2) {
    firstCard = null;
    secondCard = null;
    scoor++;
    if (scoor == 6) {
    setTimeout(function () {
    winner();
    }, 3000);
    }
  } else {
    canClick = false;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      firstCard = null;
      secondCard = null;
      canClick = true;
    }, 1000);
  }
}

function winner() {
  let game = document.querySelector(".game");
  game.innerHTML = `

  <div class="winner">
  <h1>Winner 🎉</h1>

  <button onclick='newGame()'>TRY AGAIN</button>
</div>

  `;
}

function newGame() {
  setTimeout(function () {
    location.reload();
  }, 1000);
}

function randCards() {
  cards.forEach((card) => {
    let rand = Math.floor(Math.random() * 12);
    card.style.order = rand;
  });
}
