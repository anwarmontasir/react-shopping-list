import React from 'react';
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';
import './App.css';

class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false }
    ]
  }
  newItemsToState(newItems) {
    this.setState({
      shoppingItems: newItems
    })
  }
  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item);
    this.newItemsToState(newItems);
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    })
    this.newItemsToState(newItems);
  }
  handleAddItem = (itemName) => {
    const newItems = [
      { name: itemName, checked: false },
      ...this.state.shoppingItems
    ];
    this.newItemsToState(newItems);
  }
  render() {
    return (
      <div id="app">
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} onDeleteItem={this.handleDeleteItem} onCheckItem={this.handleCheckItem} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;