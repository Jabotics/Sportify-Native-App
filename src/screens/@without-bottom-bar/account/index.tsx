import React from "react";
import useStatusBarStyle from "@/utils/hooks/useStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import COLORS from "@/styles/abstracts/colors";
import EntypoIcons from "react-native-vector-icons/Entypo";

const Account = ({ navigation }: { navigation: NavigationProp<any> }) => {
  useStatusBarStyle("dark");
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
      transform: [{ translateY: slideAnimation.value }],
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
      <SafeAreaView>
        <View className="flex flex-row justify-between items-center overflow-hidden mt-5 border-b border-gray-200 pb-5">
          <View className="flex-1 flex flex-row gap-1 items-center justify-between mr-5 ">
            <Pressable onPress={() => navigation.goBack()} className="px-1">
              <EntypoIcons name="cross" size={25} color={COLORS.primary} />
            </Pressable>
            <Text
              style={{ color: COLORS.primary }}
              className="text-xl mb-0.5 font-semibold"
            >
              My Account
            </Text>
          </View>

          <View
            className="flex flex-row gap-2 items-center mr-2 w-[45%] justify-end"
          >
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Account;
