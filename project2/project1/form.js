const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    const questionInput = form.elements['yourQuestion'];
    const answerInput = form.elements['yourAnswer'];
    const tagInput = form.elements['tag'];

const question = questionInput.value;
const answer = answerInput.value;
const tag = tagInput.value;

newCard = document.createElement('li')

newCard.innerHTML = ` <article class="card" id="card">
<h2 class="card__question">
    ${question}
</h2>
<button class="card__button-answer" type="button" data-js="card-button">Show answer</button>
<p class="tag__answer" data-js="card__answer">${answer}</p>
<p class="tag__answer" data-js="tag__answer">${tag}</p>
<div class="card__button-bookmark">
    <button class="bookmark" aria-label="bookmark" type="button" data-js="bookmark">
        <svg class="bookmark__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
            <path id="fullBookmark" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </svg>
    </button>
</div>
</article>`

const formContainer = document.getElementById('cardForm');
formContainer.append(newCard);

//activateButtons();

});

function charLeft(elementName, charName, maxLength){

    const selectName = `[data-js="${elementName}"]`;
    const answerField= document.querySelector(selectName);

    answerField.addEventListener("input", (event) => {

        remainingCharacters = maxLength - event.target.value.length;
        charSelectName = `[data-js="${charName}"]`;
        const chars = document.querySelector(charSelectName);
        chars.innerHTML = remainingCharacters + ' characters left';
    });
}

charLeft('question','questionCharacters',150);
charLeft('answer','answerCharacters', 150);
charLeft('tag','tagCharacters', 20);



