import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// CUSTOM IMPORTS
import Topbar from "./top-bar";
import Searchbar from "./search-bar";

import { headerStyles } from "@/styles/layout/header";

const Header = () => {
  return (
    <SafeAreaView style={headerStyles.container}>
      <Topbar />
      <Searchbar />
    </SafeAreaView>
  );
};

export default Header;
