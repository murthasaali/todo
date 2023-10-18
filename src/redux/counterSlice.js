import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const id = Date.now();
      const text = action.payload;
      const man = action.payload === 'ashiq'||action.payload === 'saleek';

      // Log the values of text and id to the console
    

      state.value.push({ id, text, man });
    },
    deleted: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, text } = action.payload;
      const taskTodo = state.value.find((task) => task.id === id);
      if (taskTodo) {
        taskTodo.text = text;
      }
    },
  },
});

// Correct export statements
export const { add, deleted, edit } = todoSlice.actions;
export const todo = todoSlice.reducer;
