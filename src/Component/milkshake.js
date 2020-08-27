import React, {Component} from "react";
import "./milkshake.css";



class Milkshake extends Component {
    render() {
        const { title, img, instructions } = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div className="recipe-card">
              <div className="recipe-card-img">
                <img src={img} alt={title} />
               </div>
                <div className="recipe-card-content">
                 <h3 className="recipe-title"> { title }</h3>
                 <h4>ingredients: </h4>
                <ul>
                   {ingredients}
                </ul>
               <h4>instructions:</h4>
             <p>{instructions}</p>
            </div>
          </div>
        );
    }
}



export default Milkshake;