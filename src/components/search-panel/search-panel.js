import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };
  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });

    this.props.onSearchChange(term);
  };
  /* onClear = (event) => {
    console.log("test");
    this.setState({ term: "" });
    this.props.onClear(term);
  };*/
  render() {
    return (
      <>
        <div className='worker-info' style={{ marginBottom: '55px' }}>
          <h1>Добрый день, дорогие студенты!</h1>
          <p>Данный раздел предназначен для поиска подходящих вакансий</p>
          {/* <div className='black'></div> */}
        </div>

        <div className='search-panel-app input-group'>
          {/* <span
          className="input-group-text"
          id="inputGroupPrepend1"
          onClick={this.onClear}
        >
          <i className="bi bi-x-lg"></i>
        </span> */}
          <input
            type='search'
            name='search'
            className='search-panel'
            placeholder='Поиск'
            value={this.state.term}
            onChange={this.onSearchChange}
          />
        </div>
      </>
    );
  }
}
