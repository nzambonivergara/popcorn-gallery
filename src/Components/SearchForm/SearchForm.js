import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    const searchTerm = event.target.value.toLowerCase().trim()
    this.props.filterMovies(searchTerm)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search movies by title..."
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={(event) => this.handleChange(event)}
        />
      </form>
    )
  }
}

export default SearchForm