/*
 * Create a list that holds all of your cards
 */
const cardList = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb", "fa fa-leaf", "fa fa-leaf"]

/* DONE
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//Selection
const container = document.querySelector('.container');
const board = document.querySelector('.gameBoard');
const ul = document.createElement('ul');

//adding deck class to ul
ul.className += ' deck';

//suffle cardList
shuffle(cardList);

// loop through suffled deck and append to appear on screen
for (i=0; i < cardList.length; i++){
    const iElement = document.createElement('i');
    iElement.className += cardList[i];
    const li = document.createElement('li');
    li.className += 'card';
    li.appendChild(iElement);

    ul.appendChild(li);
}

board.appendChild(ul);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * DONE set up the event listener for a card. If a card is clicked:
 * DONE - display the card's symbol (put this functionality in another function that you call from this one)
 * DONE - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('open');
    this.classList.add('show');
    
    if (!hasFlippedCard){
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        // do card match
        if (firstCard.childNodes[0].className === secondCard.childNodes[0].className){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }
        console.log('Function was executed!')
    }
};



const card = document.querySelectorAll('.card');
// const li = document.querySelector('li');

for (j=0; j < card.length; j++){
    card[j].addEventListener('click', flipCard)   
}


 

