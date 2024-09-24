import { View, Text, Pressable } from "react-native";
import React, { Fragment, useState } from "react";
import EntypoIcons from 'react-native-vector-icons/Entypo'
import Checkbox from "expo-checkbox";

const CustomSelect = ({
  title,
  options,
}: {
  title: string;
  options: {
    title: string;
  }[];
}) => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false)
  const handlePress = () => {
    setFilterOpen(!filterOpen)
  }
  return (
    <Fragment>
      <Pressable onPress={handlePress} className="w-full h-12 border border-gray-200 rounded-md flex flex-row items-center justify-between px-3 mt-2">
        <Text>{title}</Text>
        <EntypoIcons name={filterOpen ? "chevron-up" : "chevron-down"} />
      </Pressable>

      {filterOpen ? (
        <View className="w-[99%] py-3 px-4 mt-2 mx-auto rounded-xl bg-gray-200 flex items-start justify-start">
          {options.map((item, index) => {
            return (
              <View key={index} className="py-1.5 flex flex-row items-center justify-start w-full gap-3">
                <Checkbox style={{ height: 20, width: 20 }} />
                <Text className="text-sm">{item.title}</Text>
              </View>
            )
          })}
        </View>
      ) : null}
    </Fragment>
  );
};

export default CustomSelect;
