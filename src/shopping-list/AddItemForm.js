import React from 'react';
import './AddItemForm.css';

export default class AddItemForm extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onAddItem(e.target.itemToAdd.value);
        e.target.itemToAdd.value = '';
    }
    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
               <input type='text' placeholder='carrots' aria-label='Shopping list item' name='itemToAdd' />
               <button type='submit'>Add Item</button> 
            </form>
        )
    }
}