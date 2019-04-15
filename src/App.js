import React, { Component } from 'react';
import './App.css';
import List from './List.js';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App-list">
        {this.props.store.lists.map((list) =>
          <List
              key={list.id}
              header={list.header}
              cards={ 
                 list.cardIds.map(key => (
                  this.props.store.allCards[key]       
                 )
                 )}
                />    
        )}
        </div>
    );
  }
}

export default App;
