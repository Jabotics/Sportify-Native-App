import { useAppDispatch } from "@/store";
import { resetHeaderStyle, setHeaderStyle } from "@/store/actions/app-settings/appSettingsSlice";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const useHeaderStyle = (style: 'light' | 'dark') => {
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      // Set the status bar style when this screen is focused
      dispatch(setHeaderStyle({ style }));

      // Optional cleanup function if needed
      return () => {
        // You can reset or change the status bar style here if needed

        dispatch(resetHeaderStyle())
      };
    }, [dispatch, style])
  );
};

export default useHeaderStyle;