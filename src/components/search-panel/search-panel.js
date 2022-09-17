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

  render() {
    return (
      <>
        <div className='worker-info'>
          <h1>Добрый день, дорогие студенты!</h1>
          <p>Данный раздел предназначен для поиска подходящих вакансий</p>
        </div>
        {/* <div className='black'></div> */}
        <div className='search-panel-app input-group'>
          <input
            type='search'
            name='search'
            className='search-panel'
            placeholder='ПОИСК'
            value={this.state.term}
            onChange={this.onSearchChange}
          />
        </div>
      </>
    );
  }
}
