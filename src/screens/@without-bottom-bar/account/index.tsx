import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import { View, ScrollView, Pressable } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import EntypoIcons from "react-native-vector-icons/Entypo";

// CUSTOM IMPORTS
import MainProfileComponent from "./main-profile";

import { setShowMenu } from "@/store/actions/app-settings/appSettingsSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store";

import useStatusBarStyle from "@/utils/hooks/useStatusBar";

import COLORS from "@/styles/abstracts/colors";
import AccountMenu from "./account-menu";

const Account = ({ navigation }: { navigation: NavigationProp<any> }) => {
  useStatusBarStyle("dark");
  const slideAnimation = useSharedValue(10);
  const dispatch = useAppDispatch();
  const drawerPosition = useSharedValue(0);
  const overlayOpacity = useSharedValue(0);

  const { showMenu } = useAppSelector(
    (state: RootState) => state.appSettings.account
  );

  useFocusEffect(
    useCallback(() => {
      slideAnimation.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });

      return () => {
        slideAnimation.value = withTiming(10, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        });
      };
    }, [slideAnimation])
  );

  useFocusEffect(
    useCallback(() => {
      drawerPosition.value = withTiming(showMenu ? 0 : 75, { duration: 300 });
      overlayOpacity.value = withTiming(showMenu ? 0.5 : 0, { duration: 300 });
    }, [showMenu])
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: slideAnimation.value }],
    };
  });

  const drawerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: drawerPosition.value }],
    };
  });

  const overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
    };
  });

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    drawerPosition.value = Math.max(event.nativeEvent.translationY + 75, 0);
  };

  const onGestureEnd = (event: PanGestureHandlerGestureEvent) => {
    const { translationY } = event.nativeEvent;
    if (translationY > 135) {
      dispatch(setShowMenu(false));
    } else {
      drawerPosition.value = withSpring(0, {
        damping: 50,
        stiffness: 100,
      });
    }
  };

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
      {showMenu ? (
        <Animated.View
          className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-40"
          style={[overlayAnimatedStyle]}
        >
          <Pressable
            className="absolute top-0 left-0 right-0 bottom-0"
            onPress={() => dispatch(setShowMenu(false))}
          />
        </Animated.View>
      ) : null}

      {showMenu && (
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onEnded={(event) =>
            onGestureEnd(event as unknown as PanGestureHandlerGestureEvent)
          }
        >
          <Animated.View
            className="absolute left-0 right-0 bottom-0 bg-white z-50 rounded-xl"
            style={[{ height: "70%" }, drawerAnimatedStyle]}
          >
            <AccountMenu />
          </Animated.View>
        </PanGestureHandler>
      )}

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
