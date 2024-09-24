import { Fragment } from 'react';
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
import DynamicStatusBar from './shared/dynamic-statusbar';

const Stack = createNativeStackNavigator();

const Router = () => {
  
  return (
    <Fragment>
      <DynamicStatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Play" component={Grounds} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Welcome" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="PrimaryNavigation" component={PrimaryNavigation} options={{ headerShown: false }} />
        {/* <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </Fragment>
  );
};

export default Router;
