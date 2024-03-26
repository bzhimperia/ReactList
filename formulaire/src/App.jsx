import React, { useReducer } from 'react';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import shoppingReducer from './reducer/shoppingReducer';

const initialState = {
  input: '',
  items: [],
};

const App = () => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  return (
    <div>
      <h2>Liste de courses</h2>
      <ShoppingForm state={state} dispatch={dispatch} />
      <ShoppingList items={state.items} />
    </div>
  );
};

export default App;