import React, { useState } from 'react';

const ShoppingForm = ({ state, dispatch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch({ type: 'UPDATE_INPUT', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: input });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Ajouter une course"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default ShoppingForm;