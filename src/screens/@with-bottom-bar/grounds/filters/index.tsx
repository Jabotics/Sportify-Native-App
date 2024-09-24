import COLORS from "@/styles/abstracts/colors";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import EntypoIcons from 'react-native-vector-icons/Entypo'

const GroundFilters = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const slideAnimation = useSharedValue(-300); // Start off-screen to the left

  useEffect(() => {
    // Slide in animation when the screen is focused
    slideAnimation.value = withTiming(0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });

    return () => {
      // Slide out animation when the screen is unfocused
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
        <View className="flex flex-row justify-between items-center overflow-hidden mt-5 ">
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex flex-row gap-1 items-center justify-start"
          >
            <EntypoIcons name="cross" size={25} color={COLORS.primary} />
            <Text style={{ color: COLORS.primary }} className="text-lg mb-0.5 font-semibold">Filters</Text>
          </Pressable>

          <Pressable
            onPress={() => {}}
            className="flex flex-row gap-2 items-center mr-2"
          >
            <Text className={`text-gray-400`}>Clear Filters</Text>
          </Pressable>
        </View>
        {/* <Text>Filters Content</Text> */}
      </SafeAreaView>
    </Animated.View>
  );
};

export default GroundFilters;
