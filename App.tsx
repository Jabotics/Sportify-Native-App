import React from "react";
import { StatusBar } from "react-native";
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
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
