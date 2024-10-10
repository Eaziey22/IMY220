import React from 'react';
import Person from './Person';
import Search from './Search';
import { getCharacterById, searchCharacterByName } from '../../api';

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      currentId: 1,
    };
  }

  componentDidMount() {
    this.fetchCharacter(this.state.currentId);
  }

  fetchCharacter = async (id) => {
    const character = await getCharacterById(id);
    this.setState({ character, currentId: id });
  };

  handleSearch = async (query) => {
    const character = await searchCharacterByName(query);
    this.setState({ character });
  };

  handleNext = () => {
    this.fetchCharacter(this.state.currentId + 1);
  };

  handlePrevious = () => {
    if (this.state.currentId > 1) {
      this.fetchCharacter(this.state.currentId - 1);
    }
  };

  render() {
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <Person character={this.state.character} />
        <button onClick={this.handlePrevious} disabled={this.state.currentId <= 1}>
          Previous
        </button>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default StarWars;
