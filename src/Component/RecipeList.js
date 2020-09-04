import React, { Component } from "react";
import Recipe from "./recipe";
import "./RecipeList.css";


class RecipeList extends Component{
    static defaultProps = {
        recipes: []
    }
    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={r.id} {...r} />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;