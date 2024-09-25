import { View, Text, ScrollView } from "react-native";
import React from "react";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { filterByGroundType, filterByPrice, filterBySports } from "@/utils/___mocks___/filters";
import CustomSelect from "@/components/shared/custom-select";

const AllFilters = () => {
  return (
    <ScrollView style={{ height: "78%" }}>
      <View className="min-h-screen px-1">
        {/* Venue */}
        <View className="w-full flex items-start justify-center">
          <Text className="text-primary font-semibold">Venue</Text>
          <View className="py-1.5 px-2 bg-stone-700 rounded-xl flex flex-row items-center justify-between w-[65%]">
            <View className="flex-1 flex flex-row items-center justify-center">
              <Text className="text-white">Kazipara, Howrah</Text>
            </View>
            <View className="p-0.5 bg-stone-400 w-fit rounded-full">
              <EntypoIcons name="cross" />
            </View>
          </View>
        </View>

        {/* By Sports */}
        <View className="w-full flex items-start justify-center mt-5">
          <Text className="text-primary font-semibold">By Sports</Text>
          <CustomSelect title={filterBySports.title} options={filterBySports.options} />
        </View>

        {/* By Price */}
        <View className="w-full flex items-start justify-center mt-5">
          <Text className="text-primary font-semibold">By Price</Text>
          <CustomSelect title={filterByPrice.title} options={filterByPrice.options} />
        </View>

        {/* By Price */}
        <View className="w-full flex items-start justify-center mt-5">
          <Text className="text-primary font-semibold">By Ground Type</Text>
          <CustomSelect title={filterByGroundType.title} options={filterByGroundType.options} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AllFilters;
