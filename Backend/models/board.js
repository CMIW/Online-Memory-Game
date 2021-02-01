const Card = require('./card');

class Board{
  cards = [];
  constructor(psize){
    this.size = psize;
    for (var i = 0; i < this.size; i++) {
      this.cards.push(new Card());
    }
  }
}

module.exports = Board;
