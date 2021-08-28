import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { visible: false },
  reducers: {
    toggle(state) {
      state.visible = !state.visible;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
