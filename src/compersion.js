import React, { Component } from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
    static defaultProps = {
        onClose() { },
        onSave() { }
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: "",
            ingredients: [''],
            img: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleNewIngredient(e) {
        const { ingredients } = this.state;
        this.setState({ ingredients: [...ingredients, ''] });
    }

    handleChangeIng(e) {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i) => (
            i === index ? e.target.value : ing
        ));
        this.setState({ ingredients });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSave({ ...this.state });
        this.setState({
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        })
    }

    render() {
        const { title, instructions, img, ingredients } = this.state;
        const { onClose } = this.props;
        let inputs = ingredients.map((ing, i) => (
            <div
                className="recipe-form-line"
                key={`ingredient-${i}`}
            >
                <label>{i + 1}.
          <input
                        type="text"
                        name={`ingredient-${i}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder=" Ingredient"
                        onChange={this.handleChangeIng} />
                </label>
            </div>
        ));

        return (
            <div className="recipe-form-container">
                <form className='recipe-form' onSubmit={this.handleSubmit}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >
                        X
          </button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-title-input'>Title</label>
                        <input
                            id='recipe-title-input'
                            key='title'
                            name='title'
                            type='text'
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChange} />
                    </div>
                    <label
                        htmlFor='recipe-instructions-input'
                        style={{ marginTop: '5px' }}
                    >
                        Instructions
          </label>
                    <textarea
                        key='instructions'
                        id='recipe-instructions-input'
                        type='Instructions'
                        name='instructions'
                        rows='8'
                        cols='50'
                        autoComplete='off'
                        value={instructions}
                        onChange={this.handleChange} />
                    {inputs}
                    <button
                        type="button"
                        onClick={this.handleNewIngredient}
                        className="buttons"
                    >
                        +
          </button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-img-input'>Image Url</label>
                        <input
                            id='recipe-img-input'
                            type='text'
                            placeholder=''
                            name='img'
                            value={img}
                            size={36}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    <button
                        type="submit"
                        className="buttons"
                        style={{ alignSelf: 'flex-end', marginRight: 0 }}
                    >
                        SAVE
          </button>
                </form>
            </div>
        )
    }
}

export default RecipeInput;



// ////////////// / /////// .    App.js . //////////////




import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 0,
                    title: "Spaghetti",
                    instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
                    ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                    img: "spaghetti.jpg"
                },
                {
                    id: 1,
                    title: "Milkshake",
                    instructions: "Combine ice cream and milk.  Blend until creamy",
                    ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                    img: "milkshake.jpg"
                },
                {
                    id: 2,
                    title: "Avocado Toast",
                    instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                    ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                    img: "avocado_toast.jpg"
                }
            ],
            nextRecipeId: 3,
            showForm: false
        }

        this.handleSave = this.handleSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    handleSave(recipe) {
        this.setState((prevState, props) => {
            const newRecipe = { ...recipe, id: this.state.nextRecipeId };
            return {
                nextRecipeId: prevState.nextRecipeId + 1,
                recipes: [...this.state.recipes, newRecipe],
                showForm: false
            }
        });
    }

    onDelete(id) {
        const recipes = this.state.recipes.filter(r => r.id !== id);
        this.setState({ recipes });
    }

    render() {
        const { showForm } = this.state;
        return (
            <div className="App">
                <Navbar onNewRecipe={() => this.setState({ showForm: true })} />
                {showForm ?
                    <RecipeInput
                        onSave={this.handleSave}
                        onClose={() => this.setState({ showForm: false })}
                    /> :
                    null}
                <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
            </div>
        );
    }
}

export default RecipeApp;