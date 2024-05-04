import React from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buttons.css'
import {ListGroup, ListGroupItem} from 'reactstrap';

const Buttons = ({ingredients, summ, addIngredient, removeIngredient}) => {

    return (
        <div className='buttons'>
            <ListGroup >
                {ingredients.map((ingredient) => (
                    <ListGroupItem key={ingredient.id}>
                        <p className='name'>{ingredient.name}</p> <p>{ingredient.count}</p>
                            <Button onClick={() => addIngredient(ingredient.id)}>add</Button>
                            <Button onClick={() => removeIngredient(ingredient.id)}><i className="far fa-trash-alt"/></Button>
                    </ListGroupItem>
                ))}
                <span className='sum' >Total: {summ()}</span>
            </ListGroup>
        </div>
    );
};

export default Buttons;