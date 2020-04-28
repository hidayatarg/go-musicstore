import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {
    render() {
        return (
            <div>
                <Card key='1' img="img/strings.png" alt="strings" productName="Strings" price='100.0' desc="A very authentic and beautiful instrument!!" />
                <Card key='2' img="img/redguitar.jpeg" alt="redg" productName="Red Guitar" price='299.0' desc="A really cool red guitar that can produce super cool music!!" />
            </div>
        )
    }
}
