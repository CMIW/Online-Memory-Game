const fs = require('fs');
const path = require("path");

class Card{
  constructor(){
    var bitmap = fs.readFileSync(path.resolve(__dirname, "../Cartoon_Gems/Blue.png"));
    this.flipped = false;
    this.image = "data:image/png;base64," + new Buffer.from(bitmap).toString('base64');;
    //this.imagePath = '../Cartoon_Gems/Blue.png';
    this.clicks = 0;
  }
}

module.exports = Card;
