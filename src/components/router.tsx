import { Fragment } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// CUSTOM IMPORTS
import {
  Signup,
  Login,
  Onboarding,
  Account,
} from '@/screens';
import PrimaryNavigation from './@bottom-bar';
import DynamicStatusBar from './shared/dynamic-statusbar';
import GroundFilters from '@/screens/@with-bottom-bar/grounds/filters';

const Stack = createNativeStackNavigator();

const Router = () => {
  
  return (
    <Fragment>
      <DynamicStatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Filters" component={GroundFilters} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="PrimaryNavigation" component={PrimaryNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default Router;
