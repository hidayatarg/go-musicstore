import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {
    constructor(props) {
        //pass props to the parent component
        super(props);
        //initialize the state object for this component
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        fetch('cards.json')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    cards: result
                });
            });
    }

    render() {
        //get a list of JSX elements representing each card
        const cardItems = this.state.cards.map(
            card => <Card key={card.id} {...card} />
        );
        return (
            <div className='container pt-14'>
                <h3 className='text-center text-primary'>Products</h3>
                <div className="pt-4 row">
                    {cardItems}
                </div>
            </div>
        );
    }
}
