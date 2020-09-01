import React, { Component } from "react";


class recipeInput extends Component {
    constructor(props){
        super(props);
        this.state = {
           title: '',
           instructions: "",
           ingredients: [''],
           img: ''
        };
    }

render(){
    const {title, instructions, ingredients, img} = this.state;
    let inputs = ingredients.map((ing, i) => (
        <div>
            <label>
                <input 
                type = "text",
                name = {`ingredients - ${i}`},
                value = {ing}
                size = {45}
                autoComplete = "off"
                placeHolder="ingredient"
                onChange = {() => {}}
                 />
            </label>
        </div>
    ))
  }
}


export default recipeInput;