import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const SelectDate = () => {
  const [selected, setSelected] = useState("");
  return (
    <View className="px-5">
      <View className="mx-auto">
        <Text className="text-lg text-gray-300 mb-4">Select Date</Text>
      </View>
      <Calendar
        onDayPress={(day: { dateString: React.SetStateAction<string> }) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
        style={{
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default SelectDate;
