# Memory Game Project
This Memory Game App is a project from the [Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) by [Udacity](https://www.udacity.com/).

![project image](https://oliver-gomes.github.io/images/gif/memory-game.gif)
## Table of Contents

* [How to play](#howtoplay)
* [Instructions](#instructions)
* [How I built the Memory Game](#howibuiltthememorygame)



## How to Play
[Click the link here ](https://oliver-gomes.github.io/projects/memory-game)

## Instructions
- Click on a card
- Keep flipping the cards and match up each pair
- remember each flipped card to train your memory and help match faster with less moves


## How I built the Memory Game
- created ul element, added class property and shuffled through cardList to randomly added card to the ul element 
- display all the randomly added cards from the ul element
- created function flipCard( ) & unflipCard which flips the card and check for matching icon if not then unflip it.
- created function checkForMatch() which checks two flipped card and if matched it use disableCard( ) to freeze the card otherwise unflip( ) and scoreUpdateUI( ).
- lastly made resetGame( ) which fires when reset button is pressed.
- Overall, lot of critical thinking went into the process of making this project come alive. Mostly on making the right function which need to be invoked at the right time to have impact in the game play. Also, spend time on Chrome Developer tool to test out some function and how it's effecting the game and change according to need.

# Hope you enjoy the game ! 
