import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";

// CUSTOM IMPORTS
import { Home, Grounds, Notification, Chat, Account } from "@/screens";

const Tab = createBottomTabNavigator();

type IconName = "home" | "play" | "message" | "notification" | "account";

const icons: Record<IconName, any> = {
  home: require("@/assets/images/icons/bottom-bar-icons/home.png"),
  play: require("@/assets/images/icons/bottom-bar-icons/play.png"),
  message: require("@/assets/images/icons/bottom-bar-icons/message.png"),
  account: require("@/assets/images/icons/bottom-bar-icons/account.png"),
  notification: require("@/assets/images/icons/bottom-bar-icons/notification.png"),
};

const TabIcon = ({ name }: { name: IconName }) => {
  let w = 6;
  let h = 6;
  // (name === 'message' || name === 'notification') && (w = 7, h = 7)
  return <Image source={icons[name]} className={`w-${w} h-${h}`} />;
};

const PrimaryNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home";
              break;
            case "Play":
              iconName = focused ? "play" : "play";
              break;
            case "Chat":
              iconName = focused ? "message" : "message";
              break;
            case "Notification":
              iconName = focused ? "notification" : "notification";
              break;
            default:
              iconName = focused ? "account" : "account";
          }
          return <TabIcon name={iconName} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Play" component={Grounds} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default PrimaryNavigation;
