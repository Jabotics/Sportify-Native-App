import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Searchbar = () => {
  return (
    <View className="flex flex-row mt-3 mx-4">
      <View className="bg-gray-400 p-1 px-2 rounded-md flex justify-center">
        <Icon name="hearto" size={20} color={"#041a48"} />
      </View>
      {/* <View>
        <View className="flex flex-row border ml-4 items-center rounded-md">
          <View className="mb-1 ml-2">
            <EvilIcon name="search" size={25} />
          </View>
          <View>
            <TextInput placeholder="Search" className="w-64 p-1" />
          </View>
          <View className="mr-2">
            <MCIcon name="microphone-outline" size={25} />
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default Searchbar;
