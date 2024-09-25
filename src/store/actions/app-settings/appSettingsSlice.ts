import { AppSettingsInitialState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusBarStyle } from "expo-status-bar";

const initialState: AppSettingsInitialState = {
  statusBar: {
    style: null,
  },
  header: {
    websiteNameStyle: "dark"
  },
  account: {
    showMenu: false
  }
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

    setHeaderStyle: (state, action: PayloadAction<{ style: "light" | "dark" }>) => {
      const { style: newStyle } = action.payload;

      state.header.websiteNameStyle = newStyle;
    },
    resetHeaderStyle: (state) => {
      state.header.websiteNameStyle = "dark";
    },
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.account.showMenu = action.payload
    }
  },
});

export const { setStatusBar, resetStatusBar, setHeaderStyle, resetHeaderStyle, setShowMenu } = AppSettingsSlice.actions;
export default AppSettingsSlice.reducer;
