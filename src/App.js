import React, { Component } from 'react';
import './App.css';
import Navbar from "./Component/Navbar";
import RecipeList from "./Component/RecipeList";
import RecipeInput from "./Component/recipeInput";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Avocado Toast",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "pasta.jpg"
      },
      {
        id: 1,
          title: "Milkshake",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "milkshake.jpg"
      },
      {
        id: 2,
          title: "Spaghetti",
          ingredients: ['Pasta', 'Flour', 'Water'],
          instructions: "Mix ingredients",
          img: "spaghetti.jpg"
      }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return{
        nextRecipeId: prevState.nextRecipeId + 1, 
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
  return (
    <div className="App">
    <Navbar onNewRecipe = {()=> this.setState({showForm: true})} />
   {showForm ? <RecipeInput 
   onSave={this.handleSave}
   onClose ={() => this.setState({showForm: false})}
    /> : null }
      <RecipeList onDelete={this.onDelete} recipes ={this.state.recipes} />
      </div>
    );
  } 
}


export default App;