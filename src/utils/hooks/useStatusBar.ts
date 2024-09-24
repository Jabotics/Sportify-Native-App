import { useAppDispatch } from "@/store";
import { setStatusBar } from "@/store/actions/app-settings/appSettingsSlice";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const useStatusBarStyle = (style: 'light' | 'dark') => {
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      // Set the status bar style when this screen is focused
      dispatch(setStatusBar({ style }));

      // Optional cleanup function if needed
      return () => {
        // You can reset or change the status bar style here if needed
      };
    }, [dispatch, style])
  );
};

export default useStatusBarStyle;