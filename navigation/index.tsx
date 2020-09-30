import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "../types";
import BottomTabNav from "./BottomTabNav";
import ShoppingNav from "./ShoppingNav";
import NotFoundScreen from "../screens/NotFoundScreen";
import LinkingConfig from "./LinkingConfig";

type NavigationProps = {
  colorScheme: ColorSchemeName;
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation: React.FC<NavigationProps> = ({ colorScheme }) => (
  <NavigationContainer
    linking={LinkingConfig}
    theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
);

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={BottomTabNav} />
    <Stack.Screen name="Shopping" component={ShoppingNav} />
    <Stack.Screen
      name="NotFound"
      component={NotFoundScreen}
      options={{ title: "Oops!" }}
    />
  </Stack.Navigator>
);

export default Navigation;
