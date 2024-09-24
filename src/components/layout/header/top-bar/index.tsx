import { RootState, useAppSelector } from "@/store";
import COLORS from "@/styles/abstracts/colors";
import { headerStyles } from "@/styles/layout/header";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Topbar = () => {
  const { header } = useAppSelector((state: RootState) => state.appSettings)

  console.log(header.websiteNameStyle)
  return (
    <View style={headerStyles.topBarContainer}>
      <View>
        <View style={headerStyles.topBarTitleContainer}>
          <View style={headerStyles.topBarIconPlaceholder} />
          <Text style={headerStyles.topBarTitle} className={`${header.websiteNameStyle === "light" ? "text-primary" : "text-white"}`}>Sportify</Text>
        </View>
        <View>
          <Text style={headerStyles.topBarSubtitle} className={`${header.websiteNameStyle === "light" ? "text-primary" : "text-white"}`}>Shibpur, Howrah</Text>
        </View>
      </View>

      <View style={headerStyles.topBarButtonContainer}>
        <TouchableOpacity style={headerStyles.topBarSignInButton}>
          <Text style={headerStyles.topBarSignInText}>Sign up</Text>
        </TouchableOpacity>
        <View style={headerStyles.topBarIconContainer}>
          <Icon name="question" size={25} color={COLORS.white} />
        </View>
      </View>
    </View>
  );
};

export default Topbar;
