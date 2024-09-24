import { StatusBarStyle } from "expo-status-bar"

export interface AppSettingsInitialState {
  statusBar: {
    style: StatusBarStyle | null
  }
}