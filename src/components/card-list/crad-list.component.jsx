import React, { Component } from 'react';
import CardContainer from '../card-list/card-list-cont'; // Adjust the import path if necessary

import '../card-list/card-list.styles.css';

const CardList =({monsters}) => {
  
  return (
      <div className="card-list">
        <CardContainer mons={monsters} />
      </div>
    );
  
}

export default CardList;
