import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component';

export const CardList = (props) => (

 (
(props.monsters.length > 0) ? <div className = 'card-list'>
{props.monsters.map((monster) => (
     <Card key= {monster.id} monster = {monster}/>
     ))}
</div> :
 <div >
    No Monster Found
</div>)


)