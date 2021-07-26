/* eslint-disable no-template-curly-in-string */
import React from  'react';
import './card.styles.css'

export const Card = props => {
    return <div className = 'card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="moster" />
          <h2>{props.monster.name}</h2>
          <p>{props.monster.email}</p>
    </div>
}