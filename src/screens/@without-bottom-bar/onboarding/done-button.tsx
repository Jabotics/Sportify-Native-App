import { Text, TouchableOpacity, View } from "react-native";

const DoneButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      className="bg-blue-800 mr-2 p-2 flex justify-center items-center rounded-xl"
    >
      <View>
        <Text className="text-white">Get Started</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoneButton;
