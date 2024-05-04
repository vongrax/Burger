import React, {Component, Fragment} from 'react';
import './App.css';
import './components/burger/Burger.css'
import Burger from "./components/burger/Burger";
import {nanoid} from 'nanoid'
import Buttons from "./components/buttons/buttons";



class App extends Component {
    state = {
        ingredients: [
            {name: 'Meat', count: 0, id: nanoid()},
            {name: 'Cheese', count: 0, id: nanoid()},
            {name: 'Salad', count: 0, id: nanoid()},
            {name: 'Bacon', count: 0, id: nanoid()},
        ]
    };

    increaseIngredients = id => {
        const index = this.state.ingredients.findIndex(p => p.id === id);
        const ingredients = [...this.state.ingredients];
        const ingredient = {...ingredients[index]};
        ingredient.count++;
        ingredients[index] = ingredient;
        this.setState({ingredients})
    };

    removeIngredient = id => {
        const index = this.state.ingredients.findIndex(p => p.id === id);
        const ingredients = [...this.state.ingredients];
        const ingredient = {...ingredients[index]};
        if (ingredient.count) {
            ingredient.count--;
        }
        ingredients[index] = ingredient;
        this.setState({ingredients})
    };

    totalSum = () => {
        let summ = 20;
        this.state.ingredients.find(item => {
            if (item.count > 0 && item.name === 'Meat') {
                summ += item.count * 50
            } else if (item.count > 0 && item.name === 'Cheese') {
                summ += item.count * 20
            } else if (item.count > 0 && item.name === 'Salad') {
                summ += item.count * 5
            } else if (item.count > 0 && item.name === 'Bacon') {
                summ += item.count * 30
            }
        });
        return summ;
    };

    render() {

        let burger = (
            <Fragment>
                <Burger
                    addIngredient={this.state.ingredients}
                />
                <Buttons
                    ingredients={this.state.ingredients}
                    summ={this.totalSum}
                    addIngredient={this.increaseIngredients}
                    removeIngredient={this.removeIngredient}
                />
            </Fragment>
        );
        let style = {
            display: 'flex',
            maxWidth: '1200px',
            margin: '0 auto',
            marginTop: '40px'
        };
        return (
            <div style={style} className="App">
                {burger}
            </div>
        );
    }
}

export default App;
