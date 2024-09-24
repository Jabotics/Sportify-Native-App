import Icon from "react-native-vector-icons/Feather";
import { Pressable, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

// CUSTOM IMPORTS
import Dropdown from "@/components/shared/dropdown";
import AllGroundList from "./ground-list";

import useStatusBarStyle from "@/utils/hooks/useStatusBar";
import LottieView from "lottie-react-native";
import { HamburgerIcon } from "@/assets/animated-icons";

const GroundList = ({ navigation }: { navigation: NavigationProp<any> }) => {
  useStatusBarStyle("dark");

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      {/* Sorting and Filter component */}
      <View className="flex flex-row justify-between items-center ">
        <Pressable onPress={() => navigation.navigate("Filters")} className="w-10 h-10 border border-gray-300 rounded-md">
          <LottieView style={{ flex: 1 }} source={HamburgerIcon} loop autoPlay />
        </Pressable>
        <Dropdown
          data={["price low to high", "price high to low"]}
          onSelect={() => {}}
        />
      </View>

      <View className="h-[1px] bg-gray-300 mt-4" />

      {/* Ground List */}
      <AllGroundList />
    </View>
  );
};

export default GroundList;
