import React from 'react';
import Card from './Card.js';

export default function List(props) {
    <div className="App-list">
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card)=>
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />    
                )}
            </div>
        </section>
    </div>
}