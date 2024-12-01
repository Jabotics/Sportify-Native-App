import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

const ReviewStars = ({ name }: { name: string }) => (
  <Icon name={name} size={15} />
);

const stars = ["star", "star", "star", "star", "star-half-empty"];

const Review = () => {
  return (
    <View className="flex-row justify-between">
      {/* Left Side */}
      <View className="flex-1 items-center">
        <View className="border w-32 h-32 rounded-md border-gray-300 flex justify-center items-center">
          <Text className="text-3xl">4.7</Text>
          <View className="flex flex-row mt-1">
            {stars.map((name, index) => (
              <ReviewStars name={name} key={index} />
            ))}
          </View>
          <Text className="text-[12px] text-gray-400">1.2k reviews</Text>
        </View>

        <View className="mt-5">
          <TouchableOpacity className="flex flex-row items-center bg-primary w-32 p-1 py-2 rounded">
            <View className="ml-2">
              <EntypoIcon name="google-play" color={"white"} />
            </View>
            <View className="ml-2">
              <Text className="text-white">Google Play</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Right Side */}
      <View className="flex-1 items-center justify-center mr-2">
        <View>
          <Text className="text-primary text-[20px] font-bold text-center">
            Submit Your <Text className="underline">Valuable</Text> Review
          </Text>
        </View>
        <View className="mt-1">
          <Text className="text-[9px] text-gray-500">
            Your review helps us improve the app and serve you better.Share your
            thoughts to shape future updates and assist others in making
            informed choices.We value your feedback-thanks for contributing.
          </Text>
        </View>
        <View className="mt-9">
          <TouchableOpacity className="border border-gray-400 py-2 w-48 rounded-md">
            <Text className="text-center font-extrabold text-primary">
              Write a Review!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Review;
