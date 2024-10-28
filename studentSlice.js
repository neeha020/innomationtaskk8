import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(s => s.id === action.payload.id);
      if (index !== -1) state.students[index] = action.payload;
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;