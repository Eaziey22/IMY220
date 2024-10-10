import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSearch = () => {
    if (this.state.query) {
      this.props.onSearch(this.state.query);
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a character"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
