import React, { Component } from 'react';
import './list.css';

import ListItemElement from '../list-item-element';

export default class List extends Component {
  //Функция поиска
  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { companyObjectList: list, term } = this.props;

    const elements = list.map((item) => {
      const visibleItem = this.search(item.job, term);

      const job = visibleItem.map((element, index) => {
        return (
          <div key={index} className=' list'>
            <ListItemElement
              title={element.title}
              description={element.description}
            />
          </div>
        );
      });

      if (job.length != 0)
        return (
          <div key={item.id} className='item'>
            <h4>{item.company}</h4>
            <p>{item.address}</p>
            {job}
          </div>
        );
    });
    return <div>{elements}</div>;
  }
}
