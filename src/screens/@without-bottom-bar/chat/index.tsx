import React, { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  MostAskedQuestions,
  MessageInput,
  InitialChat,
  Messages,
} from "./components";
import { SafeAreaView } from "react-native-safe-area-context";
import useStatusBarStyle from "@/utils/hooks/useStatusBar";
import COLORS from "@/styles/abstracts/colors";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AntIcon from "react-native-vector-icons/AntDesign";

const Chat = ({ navigation }: { navigation: NativeStackNavigationProp<any> }) => {
  useStatusBarStyle("dark");

  const [showMessages, setShowMessages] = useState(false);
  const [message, setMessage] = useState("");
  const messageArr = useRef<{ type: string; message: string }[]>([]);

  const sendMessage = () => {
    if (message.trim()) {
      // console.log('message sent', message);
      messageArr.current.push({
        type: "ic",
        message: message,
      });
    }
    setMessage("");
    setShowMessages(true);
  };

  const handleChange = (text: string) => {
    setMessage(text);
  };

  // useEffect(()=> {
  //   if(message.length != 0) {
  //     setShowMessages(true);
  //   }
  // }, [message]);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row justify-between items-center overflow-hidden mt-2 mb-10 px-4">
        <View className="flex-1 flex flex-row gap-1 items-center justify-between mr-5 ">
          <Pressable onPress={() => navigation.goBack()} className="px-1">
            <EntypoIcons name="cross" size={25} color={COLORS.white} />
          </Pressable>
          <Text
            style={{ color: COLORS.white }}
            className="text-xl mb-0.5 font-medium"
          >
            Alexa
          </Text>
        </View>

        <Pressable
          onPress={() => {}}
          className="flex flex-row gap-2 items-center mr-2 w-[65%] justify-end"
        >
          <View className="h-9 w-9 bg-white rounded-full flex items-center justify-center">
          <AntIcon name="question" size={25} color={COLORS.black} />
          </View>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {showMessages ? (
          <Messages messages={messageArr.current} />
        ) : (
          <InitialChat />
        )}
      </ScrollView>
      <View className="mx-4 mb-2">
        <MessageInput
          sendMessage={sendMessage}
          onChange={handleChange}
          message={message}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
