import { AppSettingsInitialState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusBarStyle } from "expo-status-bar";

const initialState: AppSettingsInitialState = {
  statusBar: {
    style: null,
  },
};

export const AppSettingsSlice = createSlice({
  name: "AppSettingsSlice",
  initialState,
  reducers: {
    setStatusBar: (state, action: PayloadAction<{ style: StatusBarStyle }>) => {
      const { style: newStyle } = action.payload;

      state.statusBar.style = newStyle;
    },
    resetStatusBar: (state) => {
      state.statusBar.style = null;
    },
  },
});

export const { setStatusBar, resetStatusBar } = AppSettingsSlice.actions;
export default AppSettingsSlice.reducer;
