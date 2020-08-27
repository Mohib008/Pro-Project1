import React, { Component } from 'react';
import './App.css';
import Recipe from "./recipe";


class App extends Component {
  render() {
  return (
    <div className="App">
    <div>
      <Recipe 
      title="Pasta" 
      ingredients ={['flour', 'water']}
      instructions="Mix ingredients"
      img="spaghetti.jpg"
       />
      </div>
    </div>
   );
  } 
}


export default App;
