import COLORS from "@/styles/abstracts/colors";
import { headerStyles } from "@/styles/layout/header";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Topbar = () => {
  return (
    <View style={headerStyles.topBarContainer}>
      <View>
        <View style={headerStyles.topBarTitleContainer}>
          <View style={headerStyles.topBarIconPlaceholder} />
          <Text style={headerStyles.topBarTitle}>Sportify</Text>
        </View>
        <View>
          <Text style={headerStyles.topBarSubtitle}>Shibpur, Howrah</Text>
        </View>
      </View>

      <View style={headerStyles.topBarButtonContainer}>
        <TouchableOpacity style={headerStyles.topBarSignInButton}>
          <Text style={headerStyles.topBarSignInText}>Sign in</Text>
        </TouchableOpacity>
        <View style={headerStyles.topBarIconContainer}>
          <Icon name="question" size={25} color={COLORS.white} />
        </View>
      </View>
    </View>
  );
};

export default Topbar;
