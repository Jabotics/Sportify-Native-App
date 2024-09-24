import { StatusBar } from "expo-status-bar";

import { RootState, useAppSelector } from "@/store";

const DynamicStatusBar = () => {
  const statusBarStyle = useAppSelector(
    (state: RootState) => state.appSettings.statusBar.style
  );

  return (
    <StatusBar
      translucent
      backgroundColor="transparent"
      style={statusBarStyle ?? "auto"}
    />
  );
};

export default DynamicStatusBar;
