import { Fragment } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

// CUSTOM IMPORTS
import DynamicStatusBar from './shared/dynamic-statusbar';

// screens with lazy loading
import {
  Signup,
  Login,
  Onboarding,
  Account,
  BookGround,
  EditAccount,
} from '@/screens';

// screens without lazy loading
import GroundFilters from '@/screens/@without-bottom-bar/filters';

import PrimaryNavigation from './@bottom-bar';
import { Easing } from 'react-native';

const Stack = createStackNavigator();

const Router = () => {
  
  return (
    <Fragment>
      <DynamicStatusBar />
      <Stack.Navigator
        screenOptions={{
          
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Signup} options={{ headerShown: false }} />

        {/* PRIMARY NAVIGATION TAB */}
        <Stack.Screen name="PrimaryNavigation" component={PrimaryNavigation} options={{ headerShown: false }} />

        <Stack.Screen 
          name="EditAccount" 
          component={EditAccount} 
          options={{ 
            headerShown: false, 
            gestureEnabled: true,
            gestureDirection: "vertical",
            transitionSpec: {
              open: {
                animation: "spring",
                config: {
                  damping: 20,
                  mass: 1,
                  overshootClamping: false,
                  restDisplacementThreshold: 0.01,
                  restSpeedThreshold: 0.01,
                }
              },
              close: {
                animation: "timing",
                config: {
                  duration: 200,
                  easing: Easing.linear,
                },
              }
            },
            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          }} 
          
          />
        <Stack.Screen name="Filters" component={GroundFilters} options={{ headerShown: false }} />
        <Stack.Screen name="BookGround" component={BookGround} options={{ headerShown: false }} />
        {/* ======================== */}

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default Router;
