import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import GroundCard from "@/components/shared/ground-card";

const TabButtons = () => {
  const [activeTab, setActiveTab] = useState("bfu");
  return (
    <View className="flex flex-row mt-4 mx-4">
      <TouchableOpacity
        className={`p-1 px-2 justify-center items-center ${
          activeTab === "bfu" ? "bg-primary" : "bg-gray-200"
        }`}
        onPress={() => setActiveTab("bfu")}
      >
        <Text
          className={`${
            activeTab === "bfu" ? "text-white" : "text-primary"
          } text-xs`}
        >
          Best for you
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`p-1 px-2 justify-center items-center ${
          activeTab === "pop" ? "bg-primary" : "bg-gray-200"
        }`}
        onPress={() => setActiveTab("pop")}
      >
        <Text
          className={`${
            activeTab === "pop" ? "text-white" : "text-primary"
          } text-xs`}
        >
          Popular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`p-1 px-2 justify-center items-center ${
          activeTab === "near" ? "bg-primary" : "bg-gray-200"
        }`}
        onPress={() => setActiveTab("near")}
      >
        <Text
          className={`${
            activeTab === "near" ? "text-white" : "text-primary"
          } text-xs`}
        >
          Nearest
        </Text>
      </TouchableOpacity>
    </View>
  );
};

let arr = [1, 2, 3, 4];
const AllGrounds = () => {
  return (
    <View>
      <View className="flex flex-row justify-between mt-5 mx-5">
        <View>
          <Text className="text-primary font-bold text-lg">All Grounds</Text>
          <Text className="text-gray-400">4 items</Text>
        </View>
        <View>
          <Icon name="rightcircle" size={30} />
        </View>
      </View>
      <View>
        <TabButtons />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="mt-2 flex flex-row">
          {arr.map((item) => (
            <View key={item} className="mx-1">
              <GroundCard />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllGrounds;
