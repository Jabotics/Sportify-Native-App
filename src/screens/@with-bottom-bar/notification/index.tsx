import COLORS from "@/styles/abstracts/colors";
import useHeaderStyle from "@/utils/hooks/useHeaderStyle";
import React, { FC } from "react";
import { Text, View } from "react-native";

const Notification: FC = () => {
  useHeaderStyle("light");
  return (
    <View className="px-4">
      <Text style={{ fontSize: 18, color: COLORS.primary, fontWeight: "600" }}>Notification</Text>
    </View>
  );
};

export default Notification;
