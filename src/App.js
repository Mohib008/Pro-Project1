import React, { Component } from 'react';
import './App.css';
import Recipe from "./Component/recipe";
import Navbar from "./Component/Navbar";


class App extends Component {
  render() {
  return (
    <div className="App">
    <Navbar />
    <div>
      <Recipe 
      title="Spaghetti" 
      ingredients ={['Pasta', 'Flour', 'Water']}
      instructions="Mix ingredients"
      img="spaghetti.jpg"
       />
      </div>
    </div>
   );
  } 
}


export default App;
