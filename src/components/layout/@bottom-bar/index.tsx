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

const TabIcon = ({ name, focused }: { name: IconName; focused: boolean }) => {
  return (
    <Image
      source={icons[name]}
      style={{ height: 24, width: 24, marginTop: 10, opacity: focused ? 1 : 0.6 }}
    />
  );
};

const TabLabel = ({ label, focused }: { label: string; focused: boolean }) => {
  return (
    <Text style={{ fontSize: 10, color: 'black', marginBottom: 4, opacity: focused ? 1 : 0.4 }}> 
      {label}
    </Text>
  );
};

const PrimaryNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: IconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Play":
              iconName = "play";
              break;
            case "Chat":
              iconName = "message";
              break;
            case "Notification":
              iconName = "notification";
              break;
            default:
              iconName = "account";
          }
          return <TabIcon name={iconName} focused={focused} />;
        },
        tabBarLabel: ({ focused }) => {
          const label = route.name; 
          return <TabLabel label={label} focused={focused} />;
        },
        tabBarShowLabel: true,
        tabBarStyle: { height: 60 }, 
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
