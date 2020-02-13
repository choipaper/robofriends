import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponet = robots.map((user, i) => {
        return (<Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
        />
        );
    })
    if (true) {
        throw new Error('Noooooo!');
    }
    return (
        <div>
            {cardComponet}
        </div>
    );
}

export default CardList;