import { Fragment } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// CUSTOM IMPORTS
import DynamicStatusBar from './shared/dynamic-statusbar';

// screens with lazy loading
import {
  Signup,
  Login,
  Onboarding,
  Account,
  Chat,
  BookGround,
} from '@/screens';

// screens without lazy loading
import GroundFilters from '@/screens/@without-bottom-bar/filters';

import PrimaryNavigation from './@bottom-bar';

const Stack = createNativeStackNavigator();

const Router = () => {
  
  return (
    <Fragment>
      <DynamicStatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Signup} options={{ headerShown: false }} />

        {/* PRIMARY NAVIGATION TAB */}
        <Stack.Screen name="PrimaryNavigation" component={PrimaryNavigation} options={{ headerShown: false }} />

        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="Filters" component={GroundFilters} options={{ headerShown: false }} />
        <Stack.Screen name="BookGround" component={BookGround} options={{ headerShown: false }} />
        {/* ======================== */}

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default Router;
