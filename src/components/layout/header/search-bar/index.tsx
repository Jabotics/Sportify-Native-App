import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Searchbar = () => {
  return (
    <View className="flex flex-row gap-1 mt-3 w-full px-4 h-10">
      <View className="bg-gray-400 p-1 px-2 rounded-md flex justify-center items-center w-10 h-full">
        <Icon name="hearto" size={20} color={"#041a48"} />
      </View>
      <View className="flex-1 h-full flex flex-row border px-1 items-center justify-between rounded-md">
        <View className="flex flex-row items-center gap-1">
          <View className="mb-1 ">
            <EvilIcon name="search" size={25} />
          </View>
          <View>
            <TextInput placeholder="Search" className="flex-1" />
          </View>
        </View>
        <View className="">
          <MCIcon name="microphone-outline" size={25} />
        </View>
      </View>
    </View>
  );
};

export default Searchbar;
