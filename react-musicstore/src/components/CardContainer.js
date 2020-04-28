import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {
    render() {
        const cards = [
            {
                "id": 1,
                "img": "img/strings.png",
                "imgalt": "string",
                "desc": "A very authentic and beautiful instrument!!",
                "price": 100.0,
                "productname": "Strings"
            }, {
                "id": 2,
                "img": "img/redguitar.jpeg",
                "imgalt": "redg",
                "desc": "A really cool red guitar that can produce super cool music!!",
                "price": 299.0,
                "productname": "Red Guitar"
            }
        ];
        //get a list of JSX elements representing each card
        const cardItems = cards.map(
            card => <Card key={card.id} {...card} />
        );
        return (
            <div>
                {cardItems}
            </div>
        );
    }
}
