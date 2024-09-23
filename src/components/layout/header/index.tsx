import React from "react";
import { View, Text } from "react-native";

// CUSTOM IMPORTS
import { headerStyles } from "@/styles/layout/header";
import Topbar from "./top-bar";
import Searchbar from "./search-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView style={headerStyles.container}>
      <Topbar />
      <Searchbar />
    </SafeAreaView>
  );
};

export default index;
