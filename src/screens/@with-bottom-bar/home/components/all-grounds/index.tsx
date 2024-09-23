import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import GroundCard from "@/components/shared/ground-card";
import COLORS from "@/styles/abstracts/colors";
import { NavigationProp } from "@react-navigation/native";

const TabButtons = () => {
  const [activeTab, setActiveTab] = useState("bfu");
  return (
    <View className="flex flex-row mt-4 ">
      <TouchableOpacity
        className={`py-1 justify-center items-center ${
          activeTab === "bfu"
            ? "bg-primary rounded-md px-2"
            : "bg-transparent mr-2"
        }`}
        onPress={() => setActiveTab("bfu")}
      >
        <Text
          className={`${
            activeTab === "bfu" ? "text-white" : "text-primary/40"
          } text-xs`}
        >
          Best for you
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`py-1 justify-center items-center ${
          activeTab === "pop"
            ? "bg-primary rounded-md px-2"
            : "bg-transparent mx-3"
        }`}
        onPress={() => setActiveTab("pop")}
      >
        <Text
          className={`${
            activeTab === "pop" ? "text-white" : "text-primary/40"
          } text-xs`}
        >
          Popular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`py-1 justify-center items-center ${
          activeTab === "near"
            ? "bg-primary rounded-md px-2"
            : "bg-transparent ml-3"
        }`}
        onPress={() => setActiveTab("near")}
      >
        <Text
          className={`${
            activeTab === "near" ? "text-white" : "text-primary/40"
          } text-xs`}
        >
          Nearest
        </Text>
      </TouchableOpacity>
    </View>
  );
};

let arr = [1, 2, 3, 4];
const AllGrounds = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View>
      <View className="flex flex-row items-center justify-between mt-5 px-2">
        <View className="relative">
          <Image
            className="absolute -top-8 left-0 w-20 h-8"
            source={require('@/assets/images/patterns/pattern2.png')} 
          />
          <Text className="text-primary font-bold text-lg">All Grounds</Text>
          <Text className="text-gray-400">4 items</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Grounds")}>
          <Icon name="rightcircle" size={20} color={COLORS.primaryShade1} />
        </TouchableOpacity>
      </View>
      <View className="pl-2">
        <TabButtons />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="mt-5 w-full h-[50vh]"
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          // gap: 10
        }}
      >
        {arr.map((item) => (
          <React.Fragment key={item}>
            <GroundCard />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllGrounds;
