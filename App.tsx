import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Welcome,
  Login,
  GroundList,
  Onboarding,  
} from "./src/screens";
import { store } from './src/redux/store';
import { Provider } from "react-redux";
import Main from "./src/screens/main/Main";
import EditProfile from "./src/screens/profile/EditProfile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  GroundList: undefined;
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="GroundList" component={GroundList} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />          
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />          
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
