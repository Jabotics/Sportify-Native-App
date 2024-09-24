import { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

// CUSTOM IMPORTS
import COLORS from "@/styles/abstracts/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import EntypoIcons from "react-native-vector-icons/Entypo";
import AllFilters from "./all-filters";

const GroundFilters = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const slideAnimation = useSharedValue(-300);

  useEffect(() => {
    slideAnimation.value = withTiming(0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });

    return () => {
      slideAnimation.value = withTiming(-300, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    };
  }, [slideAnimation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: slideAnimation.value }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          zIndex: 1000,
        },
        animatedStyle,
      ]}
    >
      <SafeAreaView className="mx-3">
        <View className="flex flex-row justify-between items-center overflow-hidden mt-5 border-b border-gray-200 pb-5">
          <View className="flex-1 flex flex-row gap-1 items-center justify-between mr-5 ">
            <Pressable onPress={() => navigation.goBack()} className="px-1">
              <EntypoIcons name="cross" size={25} color={COLORS.primary} />
            </Pressable>
            <Text
              style={{ color: COLORS.primary }}
              className="text-xl mb-0.5 font-semibold"
            >
              Filter Ground
            </Text>
          </View>

          <Pressable
            onPress={() => {}}
            className="flex flex-row gap-2 items-center mr-2 w-[45%] justify-end"
          >
            <Text className={`text-gray-400`}>Clear Filters</Text>
          </Pressable>
        </View>

        <View className="mt-8">
          <AllFilters />
        </View>
        <View className="fixed bottom-0 left-0 right-0 border-t border-gray-300 h-20 w-full flex flex-row items-center justify-end">
          <View className="px-10 py-3 bg-primary rounded-md">
            <Text className="text-white">Apply</Text>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default GroundFilters;
