import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../components/pages/Chat";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";
import Schedule from "../components/pages/Schedule";
import Authentication from "../components/pages/Auth";

import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Subject } from "../components/features/Subject";
import Register from "../components/pages/Auth/Register";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AuthPage = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AuthScreen"
      component={Authentication}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={Register}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const HomePage = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomePage"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Subject"
      component={Subject}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SchedulePage = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ShedulePage"
      component={Schedule}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Subject"
      component={Subject}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: any;
        switch (route.name) {
          case "Home":
            iconName = focused ? "md-home" : "md-home-outline";
            break;
          case "Schedule":
            iconName = focused ? "md-calendar" : "md-calendar-outline";
            break;
          case "Chat":
            iconName = focused ? "md-chatbox" : "md-chatbox-outline";
            break;
          case "Profile":
            iconName = focused ? "md-happy" : "md-happy-outline";
            break;
          default:
            break;
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        position: "absolute",
        elevation: 0,
        paddingTop: 1,
        paddingBottom: 10,
        backgroundColor: "#3c4043",
        height: 60,
        shadowColor: "#7F5DF0",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      tabBarActiveTintColor: "#64b28b",
      tabBarInactiveTintColor: "#c5c9cc",
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Schedule" component={SchedulePage} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
