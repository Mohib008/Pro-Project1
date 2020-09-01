import React, { Component } from "react";
import Recipe from "./recipe";
import "./RecipeList.css";


class RecipeList extends Component{
    static defaultProps = {
        recipes:[
            {
                title: "Avocado Toast",
                ingredients: ['Pasta', 'Flour', 'Water'],
                instructions: "Mix ingredients",
                img: "pasta.jpg"
            },
            {
                title: "Milkshake",
                ingredients: ['Pasta', 'Flour', 'Water'],
                instructions: "Mix ingredients",
                img: "milkshake.jpg"
            },
            {
                title: "Spaghetti",
                ingredients: ['Pasta', 'Flour', 'Water'],
                instructions: "Mix ingredients",
                img: "spaghetti.jpg"
            }
        ]
    }
    render(){
        const recipes = this.props.recipes.map((req,index) => (
            <Recipe key={req.id} {...req} />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;