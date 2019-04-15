import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-list">
        {this.props.lists.map((list) =>
          <List
              key={list.id}
              header={list.header}
              cards={ 
                 list.cardIds.map(key => {
                   list.allCards[key]
                   
                 })
                }
                />    
        )}
        </div>
    );
  }
}

export default App;
