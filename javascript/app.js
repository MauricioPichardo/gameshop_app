// Total Missed Guesses
var missed=0;
 // Total Guesses
var first = ('#qwerty');
var second = ('#phrase') ;
var guessed_letters=[];
const startB = document.querySelector('.btn__reset');


var guess_strings = ["Clean the dishes", "Vaccum", "Sweep the floors","Fold the laundry", "Scrub the toilet","Dust the shelves"];
var name = guess_strings[0];

const alphabet = document.querySelectorAll("button");


// Prepare Guessing Game
function getRandomPhraseAsArray() {
   return Math.floor(Math.random() * guess_strings.length)
};

var secret_phrase = guess_strings[getRandomPhraseAsArray()];





// Create Phrase Format
$(document).ready(function() {
    $('.btn__reset').click(function(){
    $('#overlay').hide();
    console.log(secret_phrase);
    var name="";
    for (i = 0; i < secret_phrase.length; i++) {
      if ( secret_phrase[i]=== " ") {
      name += "<li class='space'>" + secret_phrase[i] +"</li>";
      }
        else {
            name += "<li class='letter'>" + secret_phrase[i] + "</li>";
        };};
    phrase.innerHTML= name;

      });});







// LetterFound Function
// checkLetter
function checkLetter(parameter) {
      const list = document.querySelectorAll('.letter');
      var match= null;
      const parm= parameter.textContent;
      for (let i= 0; i < list.length; i++){
          if ( list[i].textContent.toLowerCase() === parm) {
              list[i].className += " show";
              match = list[i].textContent;
          }

      }
      return match;
};




// checkWin Function
function checkwin() {
    var marked= document.querySelectorAll('.show');
    var phraseLetters= document.querySelectorAll('.letter');
    console.log(marked.length);
    console.log(phraseLetters.length);
    if ( phraseLetters.length === marked.length) {
      document.querySelector('#overlay').className='win';
      $('#overlay').show();
      $('#won').show();
      $('#leg').hide();
      $('.btn__reset').hide();
      $('.initiate').show();
    } else if (missed >= 5) {
      document.querySelector('#overlay').className='lossed';
      $('#overlay').show();
      $('#lost').show();
      $('#leg').hide();
      $('.btn__reset').hide();
      $('.initiate').show();
    }
}



      // Add Event Listner's for all Buttons
$(document).ready(function() {
  for (let i= 0; i < alphabet.length; i += 1) {
      alphabet[i].addEventListener('click',(e) =>{
      let alpha = e.target;
      let result =checkLetter(alpha);
        if (result!=null){
          alpha.className += " chosen";
        } else {
          alpha.className += " lose";
          missed += 1;
          let hearts= document.querySelectorAll('.tries > img');
          console.log(hearts);
          for ( i=0; i< missed;i++){
          hearts[i].src="images/lostHeart.png";
          }
        };
      var picked ;
      checkwin()
    });
  };
});





// Reset Game
$(document).ready(function() {
    $('.initiate').click(function(){
    $('#lost').hide();
    $('#won').hide();
    let hearts= document.querySelectorAll('.tries > img');
    console.log(hearts);
    for ( i=0; i< 5;i++){
    hearts[i].src="images/liveHeart.png";
    missed=0;};
    for (i = 0; i < alphabet.length; i++) {
      alphabet[i].className='keyrow';}
      var secret_phrase = guess_strings[getRandomPhraseAsArray()];
      $('#overlay').hide();
      console.log(secret_phrase);
      var name="";
      for (i = 0; i < secret_phrase.length; i++) {
        if ( secret_phrase[i]=== " ") {
        name += "<li class='space'>" + secret_phrase[i] +"</li>";
        }
          else {
              name += "<li class='letter'>" + secret_phrase[i] + "</li>";
          };};
      phrase.innerHTML= name;
    });
});
