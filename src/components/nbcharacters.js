const characters = require('../data/characters.json');
function NumberCharacters(){
    return(<h2>Number of characters : {characters.length}</h2>)
  }

  export default NumberCharacters;