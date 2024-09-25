import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// CUSTOM IMPORTS
import { Home, Grounds, Notification, Account, Chat } from "@/screens";

import { IconName } from "@/types";
import TabIcon from "./tab-icons";
import TabLabel from "./tab-label";

const Tab = createBottomTabNavigator();

const PrimaryNavigation = () => {

  return (
    <>
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
        tabBarStyle: { height: 60, display: route.name === "Chat" || route.name === "Account" ? 'none' : 'flex', }, 
        headerShown: false,
      })}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Play" component={Grounds} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
    </>
  );
};

export default PrimaryNavigation;
