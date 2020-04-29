/* jshint esversion: 6 */

// jscs:disable maximumLineLength
// jscs: disable requirePaddingNewLinesBeforeLineComments

/*****************          step 1           *****************
user clicks selection btn until they land on their choice     */

// variables
var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
var playerImg = '';
var choice = 4;

// add click event listeners to playerBtn and label
document.querySelector('#playerBtn').addEventListener('click', updateChoice);
document.querySelector('#label').addEventListener('click', updateChoice);

// updates player's btn background image and sets their choice
function updateChoice() {

  // clear results
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#why').innerHTML = '';

  // update choice
  if (choice === 4) {
    choice = 0;
  } else {
    choice++;
  }

  // select corresponding image
  playerImg = `url(img/${choices[choice]}.png)`;

  // set playerBtn's background image
  document.querySelector('#playerBtn').style.backgroundImage = playerImg;
  document.querySelector('#playerBtn').style.backgroundSize = '200px 200px';

  // update label text
  document.querySelector('#ltext').innerHTML = choices[choice];

}

/*****************          step 2           *****************
user clicks "Throw Down" button, triggers nomads choice to be made/displayed */

// variables
var nomadChoice = 0;
var nomadImg = '';

// add click event listeners to shoot button
document.querySelector('#shoot').addEventListener('click', function () {
  genNomadChoice();
  winner();
});

// generates random throw for nomad and updates his image
function genNomadChoice() {

  // generate random choice between 0 and 4
  nomadChoice = Math.floor(Math.random() * 5);

  // select corresponding image
  nomadImg = `img/${choices[nomadChoice]}.png`;

  // set nomad's image
  document.querySelector('#nomPic').src = nomadImg;

  // update label text
  document.querySelector('#ntext').innerHTML = choices[nomadChoice];

}

/*****************          step 3           *****************
winner is determined and displayed                            */

function winner() {

  // returns font size to normal if a long explanation just happened i.e. Paper disproves Spock
  document.querySelector('#why').classList.remove('fitText');

  switch (true) {

    /*************************   rock   *************************/
    case ((choice === 0) && (nomadChoice === 0)) :
      document.querySelector('#result').innerHTML = "It's a tie!";
      document.querySelector('#why').innerHTML = 'Go again';
      break;
    case ((choice === 0) && (nomadChoice === 1)) :
      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Paper covers rock';
      break;
    case ((choice === 0) && (nomadChoice === 2)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Rock crushes scissors';
      break;
    case ((choice === 0) && (nomadChoice === 3)) :
      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Rock crushes lizard';
      break;
    case ((choice === 0) && (nomadChoice === 4)) :
      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Spock vaporizes rock';
      break;

    /*************************   paper   *************************/
    case ((choice === 1) && (nomadChoice === 0)) :
      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Paper covers rock';
      break;
    case ((choice === 1) && (nomadChoice === 1)) :
      document.querySelector('#result').innerHTML = "It's a tie!";
      document.querySelector('#why').innerHTML = 'Go again';
      break;
    case ((choice === 1) && (nomadChoice === 2)) :
      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Scissors cut paper';
      break;
    case ((choice === 1) && (nomadChoice === 3)) :
      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Lizard eats paper';
      break;
    case ((choice === 1) && (nomadChoice === 4)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Paper disproves spock';
      break;

    /***********************   scissors   ***********************/
    case ((choice === 2) && (nomadChoice === 0)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Rock crushes scissors';
      break;
    case ((choice === 2) && (nomadChoice === 1)) :
      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Scissors cut paper';
      break;
    case ((choice === 2) && (nomadChoice === 2)) :
      document.querySelector('#result').innerHTML = "It's a tie!";
      document.querySelector('#why').innerHTML = 'Go again';
      break;
    case ((choice === 2) && (nomadChoice === 3)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Scissors decapitate lizard';
      break;
    case ((choice === 2) && (nomadChoice === 4)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Spock smashes scissors';
      break;

    /************************   lizard   ************************/
    case ((choice === 3) && (nomadChoice === 0)) :
      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Rock crushes lizard';
      break;
    case ((choice === 3) && (nomadChoice === 1)) :
      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Lizard eats paper';
      break;
    case ((choice === 3) && (nomadChoice === 2)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Scissors decapitate lizard';
      break;
    case ((choice === 3) && (nomadChoice === 3)) :
      document.querySelector('#result').innerHTML = "It's a tie!";
      document.querySelector('#why').innerHTML = 'Go again';
      break;
    case ((choice === 3) && (nomadChoice === 4)) :
      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Lizard poisons Spock';
      break;

    /*************************   spock   ************************/
    case ((choice === 4) && (nomadChoice === 0)) :
      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Spock vaporizes rock';
      break;
    case ((choice === 4) && (nomadChoice === 1)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Paper disproves Spock';
      break;
    case ((choice === 4) && (nomadChoice === 2)) :
      // need to restyle explanation text to fit
      document.querySelector('#why').classList.add('fitText');

      document.querySelector('#result').innerHTML = 'You win!';
      document.querySelector('#why').innerHTML = 'Spock smashes scissors';
      break;
    case ((choice === 4) && (nomadChoice === 3)) :
      document.querySelector('#result').innerHTML = 'Nomad wins!';
      document.querySelector('#why').innerHTML = 'Lizard poisons Spock';
      break;
    case ((choice === 4) && (nomadChoice === 4)) :
      document.querySelector('#result').innerHTML = "It's a tie!";
      document.querySelector('#why').innerHTML = 'Go again';
      break;
    default: console.log('Error with choice values');

  }

  document.querySelector('#result').style.color = '#fcbf1e';
  document.querySelector('#why').style.color = '#fcbf1e';

}
