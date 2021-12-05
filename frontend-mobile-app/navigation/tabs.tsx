import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../components/pages/Chat";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";
import Schedule from "../components/pages/Schedule";

import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Subject } from "../components/features/Subject";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomePage = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomePage"
      component={Home}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Subject"
      component={Subject}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const SchedulePage = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="ShedulePage"
      component={Schedule}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Subject"
      component={Subject}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
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
