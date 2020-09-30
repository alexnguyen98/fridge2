import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ShoppingStackParamList } from "../types";
import CheckoutScreen from "../screens/CheckoutScreen";

const ShoppingStack = createStackNavigator<ShoppingStackParamList>();

const ShoppingNav: React.FC = () => (
  <ShoppingStack.Navigator>
    <ShoppingStack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={{
        headerBackTitle: "Back",
      }}
    />
  </ShoppingStack.Navigator>
);

export default ShoppingNav;
