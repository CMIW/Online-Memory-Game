const Card = require('./card');

class Board{
  cards = [];
  constructor(psize){
    this.size = psize;
    this.populateBoard();
    this.shuffleBoard();
  }

  populateBoard(){
    this.colors = ["Blue", "Green", "Orange", "Purple", "Red", "Yellow"];
    for (let i = 0; i < this.size; i += 2 ) {
      let random = Math.floor(Math.random() * 6);
      this.cards.push(new Card(this.colors[random]));
      this.cards.push(new Card(this.colors[random]));
    }
  }

  shuffleBoard(){
    this.shuffleArray(this.cards);
    this.shuffleArray(this.cards);
  }

  shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

module.exports = Board;
