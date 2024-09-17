import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Welcome,
  Login,
  GroundList,
  Onboarding,
  Home
} from "./src/screens";
import { store } from './src/redux/store';
import { Provider } from "react-redux";

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
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
