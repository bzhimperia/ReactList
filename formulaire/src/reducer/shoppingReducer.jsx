import React, { useReducer, useState } from 'react';

function shoppingReducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'UPDATE_INPUT':
        return {
          ...state,
          input: action.payload,
        };
      default:
        return state;
    }
  }

  export default shoppingReducer;