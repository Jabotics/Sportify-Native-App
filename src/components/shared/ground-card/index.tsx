import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const AmenitiesComponent = () => (
  <View className="flex flex-row items-center gap-1 mx-[2px]">
    <Icon name="checksquareo" size={9} />
    <Text className="text-[9px]">Canteen</Text>
  </View>
);

const arr = [, 1, 2, 3, 4, 5];

const GroundCard = () => {
  return (
    <View className="w-48 h-60 bg-white rounded-md overflow-hidden border border-gray-300">
      <View className="h-32 relative">
        <Image
          source={require("@/assets/images/temp/ground.png")}
          className="w-[100%] h-[100%]"
          style={{ resizeMode: "cover" }}
        />
        <View
          style={{
            position: "absolute",
            top: 10,
            left: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-stone-600 w-10 flex flex-row rounded p-[1px]"
        >
          <Icon name="star" size={12} color={"white"} />
          <Text className="text-white text-xs ml-[2px]">4.5</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-stone-600 w-5 flex flex-row rounded p-[2px]"
        >
          <Icon name="hearto" size={12} color={"white"} />
        </View>
      </View>
      <View className="mt-2">
        <View className="bg-teal-500 w-8 p-[2px] ml-2 rounded-md">
          <Text className="text-white text-[8px] text-center">New</Text>
        </View>
        <View className="ml-2">
          <Text className="text-primary underline font-semibold text-[10px]">
            Riverside Avani Mall Ground
          </Text>
        </View>
        <View className="mx-[2px] flex flex-row flex-wrap mt-1 items-center">
          {arr.map((item) => (
            <AmenitiesComponent key={item} />
          ))}
          <TouchableOpacity className="mx-2 flex justify-center items-center">
            <Text className="text-[8px]">Read more...</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between items-center mt-4 mx-2">
          <View>
            <Text className="text-xs font-semibold">From ₹ 2000</Text>
          </View>
          <View>
            <TouchableOpacity className="bg-primary rounded-md p-[2px] px-2">
              <Text className="text-white text-xs">Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GroundCard;
