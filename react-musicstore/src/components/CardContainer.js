import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {
    constructor(props) {
        //pass props to the parent component
        super(props);
        //initialize the state object for this component
        this.state = {
            cards: [
                {
                    "id": 1,
                    "img": "img/strings.png",
                    "imgalt": "string",
                    "desc": "A very authentic and beautiful instrument!!",
                    "price": 100.0,
                    "productname": "Strings"
                }, 
                {
                    "id": 2,
                    "img": "img/redguitar.jpeg",
                    "imgalt": "redg",
                    "desc": "A really cool red guitar that can produce super cool music!!",
                    "price": 299.0,
                    "productname": "Red Guitar"
                }
            ]
        };
    }

    render() {
        //get a list of JSX elements representing each card
        const cardItems = this.state.cards.map(
            card => <Card key={card.id} {...card} />
        );
        return (
            <div>
                {cardItems}
            </div>
        );
    }
}
