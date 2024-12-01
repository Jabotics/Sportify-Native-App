import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { SelectDate, Slots } from "./components";
import { SafeAreaView } from "react-native-safe-area-context";
import useStatusBarStyle from "@/utils/hooks/useStatusBar";
import { NavigationProp } from "@react-navigation/native";
import EntypoIcons from "react-native-vector-icons/Entypo";
import COLORS from "@/styles/abstracts/colors";

const BookGround = ({ navigation }: { navigation: NavigationProp<any> }) => {
  useStatusBarStyle("light");

  return (
    <SafeAreaView>
      <View className="flex flex-row justify-start items-center overflow-hidden mt-2 px-4">
        <View className="flex flex-row gap-1 items-center justify-between mr-5 w-1/2">
          <Pressable onPress={() => navigation.goBack()} className="px-1">
            <EntypoIcons name="cross" size={25} color={COLORS.white} />
          </Pressable>
          <Text
            style={{ color: COLORS.white }}
            className="text-xl mb-0.5 font-medium"
          >
            Book Ground
          </Text>
        </View>
      </View>

      {/* DATE */}
      <View className="mt-8">
        <SelectDate />
      </View>

      {/* SLOTS */}
      <View className="mt-4" >
        <Slots />
      </View>
    </SafeAreaView>
  );
};

export default BookGround;
