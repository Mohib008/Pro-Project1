import React, {Component} from "react";



class Portfolio extends Component {
    render() {
        const { title } = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div>
            <div>Portfolio { title }</div>
            <ul>
                {ingredients}
            </ul>
            </div>
        );
    }
}



export default Portfolio;