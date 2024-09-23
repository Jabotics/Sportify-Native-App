import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

type sportsName = "cricket" | "football" | "hockey" | "swiming" | "badminton";

const sportIcons = {
  cricket: require("@/assets/images/icons/sports-icons/cricket.png"),
  hockey: require("@/assets/images/icons/sports-icons/hockey.png"),
  football: require("@/assets/images/icons/sports-icons/football.png"),
  swiming: require("@/assets/images/icons/sports-icons/swiming.png"),
  badminton: require("@/assets/images/icons/sports-icons/badminton.png"),
};

const sports: sportsName[] = [
  "cricket",
  "hockey",
  "football",
  "swiming",
  "badminton",
];

const Sports = ({ name }: { name: sportsName }) => (
  <View className="flex flex-col items-center justify-center gap-1 ml-1">
    <View className="border border-gray-400/25 bg-primary/10 shadow-lg w-[70px] h-16 p-1 rounded-md flex items-center justify-center">
      <Image
        source={sportIcons[name]}
        className="w-12 h-12"
        style={{ resizeMode: "contain" }}
      />
    </View>
    <Text className="text-xs font-semibold text-primary/40">{name.charAt(0).toUpperCase() + name.substring(1)}</Text>
  </View>
);

const AllSports = () => {
  return (
    <View className="flex justify-center items-center mt-4">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row">
          {sports.map((sport: sportsName) => (
            <View key={sport}>
              <Sports name={sport} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllSports;
