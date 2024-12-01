import { headerStyles } from "@/styles/layout/header";
import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Searchbar = () => {
  return (
    <View style={headerStyles.searchBarContainer}>
      <View style={headerStyles.searchBarHeartIconContainer}>
        <Icon name="hearto" size={20} color="#041a48" />
      </View>
      <View style={headerStyles.searchContainer}>
        <View style={headerStyles.inputContainer}>
          <EvilIcon name="search" size={25} style={headerStyles.searchIcon} />
          <TextInput placeholder="Search" style={headerStyles.textInput} placeholderTextColor="#33333365" />
          <MCIcon
            name="microphone-outline"
            size={25}
            style={{ color: "#33333365" }}
          />
        </View>
      </View>
    </View>
  );
};

export default Searchbar;
