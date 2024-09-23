import React from "react";
// import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// CUSTOM IMPORTS
import Router from "./src/components/router";

import { store } from "./src/store";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  GroundList: undefined;
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function App() {
  return (
    <Provider store={store}>
      {/* <SafeAreaView style={styles.safeArea}> */}
      {/* <StatusBar
          barStyle="dark-content" // or "dark-content" for dark theme
          backgroundColor="#fff" // Set the background color
        /> */}
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });
