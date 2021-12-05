import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthPage, Tabs } from "./navigation/tabs";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={AuthPage}
        />
        <Stack.Screen
          name="Main"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* <Tabs /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
