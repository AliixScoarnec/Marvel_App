import  Title  from './components/title.js'
import  CharactersList  from './components/listcharacters.js'
import  NumberCharacters  from './components/nbcharacters.js'


const characters = require('./data/characters.json');


function App() {
return (
  <>
    <Title/>
    <NumberCharacters characters={characters}/>
    <CharactersList characters={characters}/>
  </>

);
}

export default App;
