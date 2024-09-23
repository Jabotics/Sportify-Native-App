import { FC, useRef } from "react";
import { ScrollView, View, Text, StyleSheet, Animated } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

// CUSTOM IMPORTS
import {
  TopGround,
  AllSports,
  Footer,
  NewsLetter,
} from "./components";
import { shadowStyles } from "@/styles/abstracts/utils";

const Home: FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false } // Change to true if animating supported properties
  );

  const paddingTop = scrollY.interpolate({
    inputRange: [0, 100], // Adjust this range as needed
    outputRange: ['65%', '0%'],
    extrapolate: 'clamp', // Prevents going below 0%
  });

  return (
    <View className="flex-1 px-4 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      {/* Top Ground Component */}
      <View>
        <TopGround />
      </View>

      {/* Scrollable components */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        className="absolute top-0 left-0 right-0 bottom-0 z-10 "
        contentContainerStyle={{ paddingTop }}
        onScroll={handleScroll}
        scrollEventThrottle={1}
      >
        <View
          className="min-h-fit bg-white rounded-tl-3xl rounded-tr-3xl"
          style={shadowStyles.top}
        >
          <View className="w-full h-10 flex items-center justify-center border-b-[1px] border-gray-300/40">
            <Entypo name="minus" size={25} />
          </View>

          {/* All Sports Component */}
          <View className="mt-5 px-4">
            <AllSports />
          </View>

          {/* NewsLetter Component */}
          <View className="mt-10 ">
            <NewsLetter />
          </View>

          {/* Footer Component */}
          <View className="mt-10">
            <Footer />
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
