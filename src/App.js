import React, { Component } from 'react';
import './App.css';
import Navbar from "./Component/Navbar";
import RecipeList from "./Component/RecipeList";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: [
        {
          id: 1,
          title: "Avocado Toast",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "pasta.jpg"
      },
      {
        id: 2,
          title: "Milkshake",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "milkshake.jpg"
      },
      {
        id: 3,
          title: "Spaghetti",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "spaghetti.jpg"
      }
      ],
      nextRecipeId: 4,
    }
  }
  render() {
  return (
    <div className="App">
    <Navbar />
    <RecipeList recipe ={this.state.recipe} />
    </div>
   );
  } 
}


export default App;
