const fs = require('fs');
const path = require("path");

class Card{
  constructor(color){
    var bitmap = fs.readFileSync(path.resolve(__dirname, "../Cartoon_Gems/"+color+".png"));
    this.flipped = false;
    this.image = "data:image/png;base64," + new Buffer.from(bitmap).toString('base64');;
    this.color = color;
    this.clicks = 0;
  }
}

module.exports = Card;
