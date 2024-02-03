
const deck = ["2s.png","3s.png","4s.png","5s.png","6s.png","7s.png","8s.png","9s.png","10s.png","Js.png","Qs.png","Ks.png","As.png","2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","Jc.png","Qc.png","Kc.png","Ac.png","2h.png","3h.png","4h.png","5h.png","6h.png","7h.png","8h.png","9h.png","10h.png","Jh.png","Qh.png","Kh.png","Ah.png","2d.png","3d.png","4d.png","5d.png","6d.png","7d.png","8d.png","9d.png","10d.png","Jd.png","Qd.png","Kd.png","Ad.png"];
const shuffledDeck = shuffleDeck(deck)

function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}





document.addEventListener('DOMContentLoaded', function() {
  var refreshImage = document.getElementById('trump-card');

  if (refreshImage) {
    refreshImage.addEventListener('click', function() {
      // Reload the page when the image is clicked
      window.location.reload();
    });
  }


//LEAD ESTABLISHED
var randomLead = Math.floor(Math.random() * 2);

if (randomLead === 0) {
  var pLead = document.getElementById('pDot');
  pLead.style.backgroundColor = "rgb(0, 126, 40)";
  pLead.style.height = "60px";
  pLead.style.width = "60px";
}else if (randomLead === 1) {
  var cLead = document.getElementById('cDot');
  cLead.style.backgroundColor = "rgb(0, 126, 40)";
  cLead.style.height = "60px";
  cLead.style.width = "60px";
  cLead.style.top = "25px";
}

//PLAYERS CARD DEAL
  var imageElement = document.getElementById('player-card');
  if (imageElement) {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * shuffledDeck.length);

    // Set the image source to the randomly chosen image path
    imageElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[0];
  }

  //TRUMP CARD DEAL
  var trumpElement = document.getElementById('trump-card');
  if (trumpElement) {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * shuffledDeck.length);

    // Set the image source to the randomly chosen image path
    trumpElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[2];
  }


  //BID////////////////////
  var myButton = document.getElementById('0');
  if (myButton) {
    myButton.addEventListener('click', function() {
      // Call your function when the button is clicked
      playRound(0);
    });
  }
  var myButton = document.getElementById('1');
  if (myButton) {
    myButton.addEventListener('click', function() {
      // Call your function when the button is clicked
      playRound(1);
    });
  }


});



function playRound(bid) {
  
  var cpuCard = document.getElementById('computer-card');

  if (cpuCard) {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * shuffledDeck.length);

    // Set the image source to the randomly chosen image path
    cpuCard.src = "./images/PNG-cards-1.3/" + shuffledDeck[1];
  }


}