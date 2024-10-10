import React from 'react';

class Person extends React.Component {
  render() {
    const { name, height, mass, gender, birth_year, error } = this.props.character;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>{name}</h2>
        <p>Height: {height} cm</p>
        <p>Mass: {mass} kg</p>
        <p>Gender: {gender}</p>
        <p>Birth Year: {birth_year}</p>
      </div>
    );
  }
}

export default Person;
