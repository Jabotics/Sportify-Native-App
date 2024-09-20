import React from "react";
import { View, Text } from "react-native";

// CUSTOM IMPORTS
import { headerStyles } from "@/styles/layout/header";
import Topbar from "./top-bar";
import Searchbar from "./search-bar";

const index = () => {
  return (
    <View style={headerStyles.container}>
      <Topbar />
      <Searchbar />
    </View>
  );
};

export default index;
