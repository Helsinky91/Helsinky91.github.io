class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    //for i from 0 to n−2 do
     //j ← random integer such that i ≤ j < n
     //exchange a[i] and a[j]
if (!this.cards){
  return 
}
    /* const suffleArray = [];
     for(let i = 0; i< this.cards.length; i++) {
       const randomCardIndex = Math.floor(Math.random() * this.cards.length);
       const randomCard = this.cards[randomCardIndex];

       suffleArray.push(randomCard);
     }
     this.cards = suffleArray */

     for(let i = 0; i< this.cards.length; i++) {
      const randomCardIndex = Math.floor(Math.random() * this.cards.length);
      const randomCard = this.cards[randomCardIndex];

      this.cards[randomCardIndex] = this.cards[i]
      this.cards[i] = randomCard;
  }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false
    };
  }


  checkIfFinished() {
    if (this.pairsGuessed === (this.cards.length)/2) {
      setTimeout(()=>{alert(`Well done! You won the game with ${this.pairsClicked*2} clicks!`)}, 1000);
      return true;
    }
    return false
  }
}



// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
