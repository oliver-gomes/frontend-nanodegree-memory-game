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
 * DONE - if the list already has another card, check to see if the two cards match
 * DONE + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 * DONE + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 * DONE  + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let movesMade = 0;


// Display Moves
let displayMoves = document.querySelector('.moves');
displayMoves.textContent = movesMade;

// Select stars
let parentStars = document.querySelectorAll('.stars li')

let childStars = document.querySelectorAll('.fa-star')
console.log({parentStars, childStars})

// flipCard function 
function flipCard(){
    if (lockBoard) return;

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
        checkForMatch();
    }
};

// match the card when clicked function
function checkForMatch(){
    let isMatch = firstCard.childNodes[0].className === secondCard.childNodes[0].className;

    if (isMatch){
        disableCards();
    } else {
        unflipCards();
        scoreUpdateUI();
    }
}

function scoreUpdateUI (){
    // childStars[movesLeft - 1].remove();
    movesMade++;
    displayMoves.textContent = movesMade;
    // setTimeout(function(){
    //     if (movesLeft === 0){
    //         swal("Game Over", "would you like to play again?", "error", {
    //             buttons: {
    //               play: {
    //                 text: "Aww yiss",
    //                 value: "again",
    //               },
    //             },
    //           })
    //           .then((value) => {
    //             switch (value) {
         
    //               case "again":
    //                 // resetGame();
    //                 break;
    //             }
    //           });
    //     };
    // }, 500);


}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}


// freeze the card if matched function
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// unflip and cover the card if NOT matched function
function unflipCards(){
    lockBoard = true;

    setTimeout(function(){
        // not a match
        firstCard.classList.remove('open')
        firstCard.classList.remove('show')
        secondCard.classList.remove('open')
        secondCard.classList.remove('show')

        resetBoard();
    }, 1000);  
}


// select all the cards into an array
const card = document.querySelectorAll('.card');


// have bug need fixed
function resetGame(){
    let displayMoves = document.querySelector('.moves');
    movesMade = 0;
    displayMoves.textContent = movesMade;
    hasFlippedCard = false;
    lockBoard = false;
    let card = document.querySelectorAll('.card');
    for (i = 0; i < card.length; i++){
        // lockBoard = true;
        card[i].classList.remove('open');
        card[i].classList.remove('show');
        card[i].addEventListener('click', flipCard);
        card[i].addEventListener('click', flipCard);
   
    }

    var deck = document.querySelector('.deck');
    for (var i = deck.children.length; i >= 0; i--) {
        deck.appendChild(deck.children[Math.random() * i | 0]);
    }
};



let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

// function(){
//     swal('Hey')
// }

function checkWinner(){
    let card = document.querySelectorAll('card');

    for( i = 0; i <card.length; i++){
        if (card[i].className === 'open' && card[card.length - 1] === 'open'){
            console.log('winner')
        }
    }
    // let isMatch = firstCard.childNodes[0].className === secondCard.childNodes[0].className;
}


// loop through the array and add the event to each cards
// addEventListener to all the card on click to flip the cards
for (j=0; j < card.length; j++){
    card[j].addEventListener('click', flipCard)   
}