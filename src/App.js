import React from 'react';
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false }
    ]
  }
  handleDeleteItem(item) {
    console.log('del', {item});
  }
  handleCheckItem(item) {
    console.log('check', {item});
  }
  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} onDeleteItem={this.handleDeleteItem} onCheckItem={this.handleCheckItem} />
          </section>
        </main>
      </>
    );
  }
}

export default App;