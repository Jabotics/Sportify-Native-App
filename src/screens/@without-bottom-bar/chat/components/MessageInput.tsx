import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";


interface MessageInputProps {
  message: string;
  onChange: (text: string) => void;
  sendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  sendMessage,
  message,
  onChange,
}) => {
  return (
    <View className="border border-gray-400 rounded-full p-2 px-4 flex flex-row items-center justify-between">
      <TextInput
        placeholder="Write a message..."
        value={message}
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={sendMessage} className="w-8 h-8 flex items-center justify-center">
        
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;
