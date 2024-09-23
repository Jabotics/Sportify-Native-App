import React from "react";
import { Text, View } from "react-native";

// CUSTOM IMPORTS
import { topGroundStyles } from "@/styles/screens/home/top-ground-items";
import TopGroundItems from "./top-ground-items";

const TopGround = () => {
  return (
    <View className="w-full flex items-center justify-center">
      <View className="w-full">
        <Text className="text-center text-sm font-medium text-black">
          Top Grounds Of The Month
        </Text>
      </View>
      {/* <View className="mt-2 flex flex-row items-center justify-between">
        {Array.from({ length: 3 }).map((_, index) => (
          <View key={index} className="w-[30%] ">
            <TopGroundItems />
          </View>
        ))}
      </View> */}
      <View className="w-full h-[25vh] mt-2 flex flex-row items-center justify-between">
        {
          Array.from({ length: 3 }).map((_, index) => {
            return (
              <View key={index} style={topGroundStyles.container}>
                <TopGroundItems />
              </View>
            )
          })
        }
      </View>
    </View>
  );
};

export default TopGround;
