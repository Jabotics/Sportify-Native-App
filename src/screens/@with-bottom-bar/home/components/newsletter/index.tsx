import { newsLetterStyles } from "@/styles/screens/home/newsletter";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NewsLetter = () => {
  return (
    <View className="px-4">
      <View>
        <Text style={newsLetterStyles.title1}>Subscribe to</Text>
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
