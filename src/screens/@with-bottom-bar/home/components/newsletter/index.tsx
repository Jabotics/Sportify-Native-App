import COLORS from "@/styles/abstracts/colors";
import { newsLetterStyles } from "@/styles/screens/home/newsletter";
import { useLoadFonts } from "@/utils/hooks/fonts";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NewsLetter = () => {
  const { fontsLoaded, error } = useLoadFonts();

  const renderTitle1 = (title1: string) => {
    if (error) {
      return (
        <Text className="text-center text-sm font-medium text-black">
          Error loading fonts
        </Text>
      );
    }

    if (!fontsLoaded) {
      return <ActivityIndicator size="small" color={COLORS.primary} />;
    }

    return <Text style={newsLetterStyles.title1}>{title1}</Text>;
  };
  return (
    <View className="px-4">
      <View>
        {renderTitle1("Subscribe to")}
        <Text style={newsLetterStyles.title2}>Our Newsletter!</Text>
        <Text style={newsLetterStyles.title3}>
          Subscribe to our newsletter and stay updated
        </Text>
      </View>
      <View className="mt-8">
        <View style={newsLetterStyles.inputContainer}>
          <Icon name="email-newsletter" size={20} color={"#33333380"} />
          <TextInput placeholder="Your Email" className="ml-2" />
        </View>
        <TouchableOpacity className="p-3 border bg-primary rounded-md mt-3">
          <Text className="text-center text-white text-sm">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsLetter;
