import React, { Component } from "react";
import Recipe from "./recipe";
import "./RecipeList.css";


class RecipeList extends Component{
    static defaultProps = {
        recipes:[
            {
                title: "Avocado Toast",
                ingredients: ['2 slices of bread', '2 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'],
                instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
                img: "pasta.jpg"
            },
            {
                title: "Milkshake",
                ingredients: ['2 Scoops Ice cream', '8 ounces milk', 'chaclate & cream'],
                instructions: "Combine ice cream and milk. Blend unil creamy",
                img: "milkshake.jpg"
            },
            {
                title: "Spaghetti",
                ingredients: ['Pasta', '8 cups water', '1 box spaghetti'],
                instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta unitl done. Combine pasta and sauce.",
                img: "spaghetti.jpg"
            }
        ]
    }
    render(){
        const recipes = this.props.recipes.map((r,index) => (
            <Recipe key={index} {...r} />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;