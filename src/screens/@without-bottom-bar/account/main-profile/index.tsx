import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { HamburgerIcon } from "@/assets/animated-icons";
import { NavigationProp } from "@react-navigation/native";

const MainProfileComponent = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View className="w-full min-h-screen flex flex-col gap-5 px-5">
      <View className="w-full h-[20vh] flex items-center justify-center">
        <View className="h-[90%] aspect-square flex items-center justify-center relative">
          <View className="h-5/6 w-5/6 rounded-2xl overflow-hidden">
            <Image
              source={require("@/assets/images/temp/profile.png")}
              className="w-full h-full object-cover"
            />
          </View>
          <View className="absolute bottom-0 right-0 h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <Image
              source={require("@/assets/images/icons/editIcon.png")}
              className="w-5 h-5"
            />
          </View>
        </View>
      </View>
      
      
      <View className="w-full h-fit flex flex-row items-center justify-between">
        <View className="flex flex-col items-start justify-center">
          <Text className="text-2xl font-light">Good Morning</Text>
          <Text className="text-2xl text-primary">Armania!</Text>
        </View>

        <Pressable onPress={() => navigation.navigate("")} className="h-12 aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
          <LottieView style={{ flex: 1, width: 35 }} source={HamburgerIcon} loop autoPlay />
        </Pressable>
      </View>

      <View className="h-px w-full bg-gray-200" />
    </View>
  );
};

export default MainProfileComponent;
