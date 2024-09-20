import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// CUSTOM IMPORTS
import {
  Signup,
  Login,
  Grounds,
  Onboarding,
  // EditProfile,
} from '@/screens';
import PrimaryNavigation from './layout/@bottom-bar';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Grounds" component={Grounds} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="PrimaryNavigation" component={PrimaryNavigation} options={{ headerShown: false }} />
      {/* <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};

export default Router;
