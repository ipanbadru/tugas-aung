import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answer',
  initialState: {
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
  },
  reducers: {
    setAnswer: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    resetAnswer: (state) => {
      state[1] = null;
      state[2] = null;
      state[3] = null;
      state[4] = null;
      state[5] = null;
    },
  },
});

export const { setAnswer, resetAnswer } = answerSlice.actions;
export default answerSlice.reducer;