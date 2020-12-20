import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Searchbar/Searchbar.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchName: '',
  };

  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('Введите название искомого объекта');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleNameChange}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
