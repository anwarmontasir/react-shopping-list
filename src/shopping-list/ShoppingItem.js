import React from 'react';
import './ShoppingItem.css';

ShoppingItem.defaultProps = {
    item: {}
}

export default function ShoppingItem(props) {
    var classNameH2 = props.item.checked ? 'checked' : null;
    return (
        <li>
            <h2 className={classNameH2}>
                {props.item.name}
            </h2>
            <button type='button' onClick={() => props.onCheckItem(props.item)} className="listBtn">check</button>
            <button type='button' onClick={() => props.onDeleteItem(props.item)} className="listBtn">delete</button>
        </li>
    )
}