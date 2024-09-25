import { useCallback } from "react";
import useStatusBarStyle from "@/utils/hooks/useStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import { View, ScrollView, Pressable, Text } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import COLORS from "@/styles/abstracts/colors";
import EntypoIcons from "react-native-vector-icons/Entypo";
import MainProfileComponent from "./main-profile";

const Account = ({ navigation }: { navigation: NavigationProp<any> }) => {
  useStatusBarStyle("dark");
  const slideAnimation = useSharedValue(50);

  useFocusEffect(
    useCallback(() => {
      // Animate slide in
      slideAnimation.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });

      return () => {
        // Animate slide out when leaving
        slideAnimation.value = withTiming(50, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        });
      };
    }, [slideAnimation])
  );

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
        },
        animatedStyle,
      ]}
    >
      <SafeAreaView>
        <View className="flex flex-row justify-between items-center overflow-hidden my-5 px-3">
          <View className="flex-1 flex flex-row gap-1 items-center justify-between mr-5 ">
            <Pressable onPress={() => navigation.goBack()} className="px-1">
              <EntypoIcons name="cross" size={25} color={COLORS.primary} />
            </Pressable>
          </View>

          <View className="flex flex-row gap-2 items-center mr-2 w-[45%] justify-end"></View>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <MainProfileComponent navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Account;
