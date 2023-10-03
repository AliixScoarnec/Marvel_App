const characters = require('../data/characters.json');
function CharactersList(){
    return(
      <>
      <h3>List of characters :</h3>
      <ul>
        {characters.map(character => (
              <li key={character.id}>
                <i>{character.name}</i>
              </li>
        ))}
      </ul>
      </>
    )
  }
  export default CharactersList;