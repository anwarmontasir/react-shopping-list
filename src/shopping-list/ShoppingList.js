import React from 'react';
import ShoppingItem from './ShoppingItem';

ShoppingList.defaultProps = {
    items: []
}

export default function ShoppingList(props) {
    return (
        <ul>
            {props.items.map((item, i) => 
                <ShoppingItem key={i} item={item} onDeleteItem={props.onDeleteItem} onCheckItem={props.onCheckItem} />    
            )}
        </ul>
    )
}