import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

// CUSTOM IMPORTS
import { topGroundStyles } from "@/styles/screens/home/top-ground-items";
import TopGroundItems from "./top-ground-items";
import { useLoadFonts } from "@/utils/hooks/fonts";
import COLORS from "@/styles/abstracts/colors";

const TopGround = () => {
  const { fontsLoaded, error } = useLoadFonts();

  const renderTitle = () => {
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

    return (
      <Text
        className="text-center text-lg text-white"
        style={{ fontFamily: "RobotoCondensed", fontWeight: "condensed", textShadowColor: COLORS.primaryShade2, textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 5, }}
      >
        Top Grounds Of The Month
      </Text>
    );
  };

  return (
    <View className="w-full flex items-center justify-center">
      <View className="w-full">{renderTitle()}</View>

      <View className="w-full h-[25vh] mt-2 flex flex-row items-center justify-between">
        {Array.from({ length: 3 }).map((_, index) => (
          <View key={index} style={topGroundStyles.container}>
            <TopGroundItems />
          </View>
        ))}
      </View>
    </View>
  );
};

export default TopGround;
