import { createSlice } from '@reduxjs/toolkit';

const defaultState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 }
];

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: defaultState,
      idCounter: defaultState.length + 1
    },
    reducers: {
      addItem: (state, action) => {
        console.log(action.payload)
        state.items.push({ id: state.idCounter++, title: action.payload, count: 1 });
      },
      removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      updateItemCount: (state, action) => {
        const { id, count } = action.payload;
        if (count < 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else if (count > 25) {
            state.items = state.items.map(item => item.id === id ? { ...item, count: item.count } : item);
        } 
        else {
          state.items = state.items.map(item => item.id === id ? { ...item, count } : item);
        }
      }
    }
  });
  

export const { addItem, removeItem, updateItemCount } = cartSlice.actions;

export default cartSlice.reducer;