import React, { Component } from 'react';
import './App.css';
import charactersData from './data/characters.json'; 

function Title({ color = 'red', children, hidden = false, ...props }) {
  if (hidden) {
    return null;
  }

  return <h1 style={{ color: color }} {...props}>{children}</h1>;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: charactersData, // Utilisez les données importées
    };
  }

  render() {
    return (
      <div className="App">
        <Title color="purple" id="my-id" data-demo="demo">Marvel App</Title>
        <h2>List of Marvel characters</h2>
        <ul>
          {this.state.characters.map(character => (
            <li key={character.id}>
              <h2>{character.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
