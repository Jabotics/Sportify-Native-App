import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Heart from "../icons/@heart";
import { useTypedNavigation } from "@/utils/hooks/useNavigation";

const AmenitiesComponent = () => (
  <View className="flex flex-row items-center gap-1 mx-[2px]  h-6">
    <Icon name="checksquareo" size={9} />
    <Text className="text-xs">Canteen</Text>
  </View>
);

const arr = [, 1, 2, 3, 4, 5];

const GroundCard = ({ showShadow = false }: { showShadow?: boolean }) => {
  const navigation = useTypedNavigation();

  const handleNavigateToBookGround = () => {
    navigation.navigate("BookGround");
  };

  const handleNavigateToGroundDetails = () => {
    navigation.navigate("Details", { groundId: "" });
  };

  return (
    <View
      className={`w-full h-[95%] bg-white rounded-md overflow-hidden border border-gray-300/40 ${
        showShadow ? "shadow-lg shadow-black" : ""
      } relative flex flex-col items-center justify-center ml-2`}
    >
      <View className="flex-1 w-full relative">
        <Pressable onPress={handleNavigateToGroundDetails}>
          <Image
            source={require("@/assets/images/temp/ground.png")}
            className="w-[100%] h-[100%]"
            style={{ resizeMode: "cover" }}
          />
        </Pressable>
        <View
          style={{
            position: "absolute",
            top: 10,
            left: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-stone-600/40 flex flex-row rounded px-3 h-10"
        >
          <Icon name="star" size={16} color={"white"} />
          <Text className="text-white text-base ml-[2px]">4.5</Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-stone-600/40 rounded w-10 h-10"
        >
          {/* <Icon name="hearto" size={16} color={"white"} /> */}
          <Heart />
        </View>
      </View>

      <View className="h-[50%] w-full relative">
        <ImageBackground
          source={require("@/assets/images/patterns/pattern1.png")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
          resizeMode="repeat"
        >
          <View className="bg-teal-500 w-8 p-[2px] ml-2 rounded-md mt-2">
            <Text className="text-white text-[10px] text-center">New</Text>
          </View>
          <Pressable
            onPress={handleNavigateToGroundDetails}
            className="ml-2 w-[75%]"
          >
            <Text
              className="text-primary underline font-semibold text-base"
              numberOfLines={2}
            >
              Riverside Avani Mall Ground
            </Text>
          </Pressable>
          <View className="mx-[2px] flex flex-row flex-wrap mt-1 items-center justify-start">
            {arr.map((item) => (
              <AmenitiesComponent key={item} />
            ))}
            <TouchableOpacity
              className="mx-2 flex flex-row justify-center items-end h-5"
              onPress={handleNavigateToGroundDetails}
            >
              <Text className="text-xs text-gray-400 underline">
                Read more...
              </Text>
            </TouchableOpacity>
          </View>

          <View className="w-full flex flex-row justify-between items-center mt-4 px-2 absolute bottom-2">
            <View className="flex flex-row items-end">
              <Text className="text-base font-semibold mr-1 inline-block h-[22px]">
                From ₹2000
              </Text>
              <Text className="text-xs line-through text-gray-500">₹2500</Text>
            </View>
            {/* <View> */}
            <TouchableOpacity
              className="bg-primary rounded-md px-7 py-1"
              onPress={handleNavigateToBookGround}
            >
              <Text className="text-white text-sm">Book</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default GroundCard;
