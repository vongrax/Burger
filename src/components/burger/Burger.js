import React, {Fragment} from 'react';

const Burger =({addIngredient}) =>{

    const allIngredients = function(){
        let ingredients = [];
        addIngredient.forEach(ingredient => {
            for (let i = 1; i <= ingredient.count; i++) {
                let component = {
                    ingredient: ingredient,
                    id: i
                };
                ingredients.push(component);
            }
        });
        return ingredients;
    };

    let ingredient = allIngredients().map(i =>{
        return <div key={i.ingredient.id} className={i.ingredient.name}/>
    });

        return (
            <Fragment>
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"/>
                        <div className="Seeds2"/>
                    </div>
                    {ingredient}
                    <div className="BreadBottom"/>
                </div>
            </Fragment>
        );
}

export default Burger;