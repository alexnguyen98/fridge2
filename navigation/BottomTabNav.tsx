import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabParamList,
  CartParamList,
  ScanParamList,
  FavouritesParamList,
} from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ScanScreen from "../screens/ScanScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import CartScreen from "../screens/CartScreen";

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

const BottomTabNav: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Scan"
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        labelStyle: { textTransform: "none" },
        showIcon: true,
      }}
    >
      <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-basket" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Scan"
        component={ScanNavigator}
        options={{
          tabBarLabel: "Scan",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-qr-scanner" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-heart-empty" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
const TabBarIcon = (props: { name: string; color: string }) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CartStack = createStackNavigator<CartParamList>();

const CartNavigator: React.FC = () => (
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={CartScreen} />
  </CartStack.Navigator>
);

const ScanStack = createStackNavigator<ScanParamList>();

const ScanNavigator: React.FC = () => (
  <ScanStack.Navigator screenOptions={{ headerShown: false }}>
    <ScanStack.Screen name="Scan" component={ScanScreen} />
  </ScanStack.Navigator>
);

const FavouritesStack = createStackNavigator<FavouritesParamList>();

const FavouritesNavigator: React.FC = () => (
  <FavouritesStack.Navigator>
    <FavouritesStack.Screen name="Favourites" component={FavouritesScreen} />
  </FavouritesStack.Navigator>
);

export default BottomTabNav;
