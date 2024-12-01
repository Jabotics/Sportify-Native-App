import React from "react";
import { View, Image, Text } from "react-native";
import LocationIcon from "react-native-vector-icons/EvilIcons";
import StarIcon from "react-native-vector-icons/AntDesign";

// CUSTOM IMPORTS
import { topGroundStyles } from "@/styles/screens/home/top-ground-items";
import COLORS from "@/styles/abstracts/colors";
import Heart from "@/components/shared/icons/@heart";

const TopGroundItems = () => (
  <React.Fragment>
    <Image
      source={require("@/assets/images/temp/ground.png")}
      style={topGroundStyles.image}
    />
    {/* Overlay */}
    <View style={topGroundStyles.overlay}></View>

    {/* Top content (Rating, Like) */}
    <View style={topGroundStyles.topContentContainer}>
      <View className="w-fit h-full px-1 flex flex-row items-center gap-1">
        <StarIcon name="star" size={15} color={COLORS.golden} />
        <Text style={{ color: COLORS.golden }}>4.7</Text>
      </View>
      <View className="w-5 h-full flex flex-row items-center justify-center">
        {/* <StarIcon name="hearto" size={15} color={"white"} /> */}
        <Heart />
      </View>
    </View>

    {/* Content */}
    <View style={topGroundStyles.contentContainer}>
      <View className="w-full bg-black/25 rounded-md px-2">
        <Text
          className="text-white font-normal text-[12px] opacity-100"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          Maidan Swiming Pool
        </Text>
      </View>
      <View className="flex flex-row items-center w-full bg-black/25 h-5 justify-start px-1">
        <LocationIcon name="location" size={15} color={"white"} />
        <Text className="text-white font-normal text-[10px]">
          {"Maidan Howrah".substring(0, 10) + "..."}
        </Text>
      </View>
    </View>
  </React.Fragment>
);

export default TopGroundItems;
