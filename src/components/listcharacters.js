import React, { Component } from 'react';
import charactersData from '../data/characters.json';
import '../App.css'; // Assurez-vous que le chemin est correct

class CharactersList extends Component {
  constructor() {
    super();
    this.state = {
      selectedCharacter: null,
    };
  }

  handleCharacterClick = (character) => {
    this.setState({ selectedCharacter: character });
  };

  handleClearClick = () => {
    this.setState({ selectedCharacter: null });
  };

  render() {
    return (
      <>
        <h3>List of characters:</h3>
        <ul>
          {charactersData.map((character) => (
            <li
              key={character.id}
              onClick={() => this.handleCharacterClick(character)}
              onMouseEnter={(e) => e.currentTarget.classList.add('hovered')} // Ajoutez la classe "hovered" au survol
              onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')} // Retirez la classe "hovered" lorsque la souris quitte
            >
              <p>{character.name}</p>
            </li>
          ))}
        </ul>
        {this.state.selectedCharacter && (
          <div className="character-details">
            {this.state.selectedCharacter.thumbnail && (
              <img
                src={`${this.state.selectedCharacter.thumbnail.path}.${this.state.selectedCharacter.thumbnail.extension}`}
                alt={this.state.selectedCharacter.name}
                style={{ width: '100px', height: '100px' }}
              />
            )}
            <h4>{this.state.selectedCharacter.name}</h4>
            <p>{this.state.selectedCharacter.description}</p>
            <button onClick={this.handleClearClick}>Close</button>
          </div>
        )}
      </>
    );
  }
}

export default CharactersList;
