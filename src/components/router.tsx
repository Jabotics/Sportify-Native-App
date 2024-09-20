import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Welcome,
  Login,
  Grounds,
  Onboarding,
  Home,
  // EditProfile,
} from '@/screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Grounds" component={Grounds} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      {/* <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};

export default Router;
