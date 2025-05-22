import { createSlice, nanoid } from '@reduxjs/toolkit';

const reminderSlice = createSlice({
  name: 'reminders',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addReminder: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(reminder) {
        return {
          payload: {
            ...reminder,
            id: nanoid(),
            status: 'pending',
          },
        };
      },
    },
    deleteReminder(state, action) {
      state.list = state.list.filter((r) => r.id !== action.payload);
    },
    markCompleted(state, action) {
      const index = state.list.findIndex((r) => r.id === action.payload);
      if (index !== -1) {
        state.list[index].status = 'completed';
      }
    },
  },
});

export const { addReminder, deleteReminder, markCompleted } = reminderSlice.actions;
export default reminderSlice.reducer;