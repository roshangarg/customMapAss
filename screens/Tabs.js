import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfile from "./UserProfile";

import CircleTimer from "./circleTimer";
import Steps from "./steps";
import ThemeChanger from "./ThemeChanger";
import Notification from "./notification";
import Icon from "react-native-vector-icons/AntDesign";
import { Icon as FeatherIcon } from "react-native-vector-icons/AntDesign";
import SettingIcon from "react-native-vector-icons/AntDesign";
import PlusIcon from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Tab = createBottomTabNavigator();
export default function Tabs() {
  const [mode, setMode] = useState();
  useEffect(() => {
    async function SetMode() {
      setMode(await AsyncStorage.getItem("mode"));
    }
    SetMode();
  }, []);
  async function toggleMode() {
    if ((await AsyncStorage.getItem("mode")) === "light") {
      await AsyncStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      await AsyncStorage.setItem("mode", "light");
      setMode("light");
    }
  }
  var iconColor = mode === "light" ? "#000" : "#fff";
  return (
    <Tab.Navigator
      initialRouteName="Steps"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "CircleTimer") {
            iconName = focused ? "find" : "find";
            color = focused ? "red" : iconColor;
          } else if (route.name === "Steps") {
            iconName = focused ? "home" : "home";
            color = focused ? "red" : iconColor;
          } else if (route.name === "Notification") {
            iconName = focused ? "bells" : "bells";
            color = focused ? "red" : iconColor;
          } else if (route.name === "UserProfile") {
            iconName = focused ? "user" : "user";
            color = focused ? "red" : iconColor;
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: mode === "light" ? "#fff" : "#000",
        },
      })}

      // tabBarOptions={{
      //   activeTintColor: 'red',
      //   inactiveTintColor: 'black'
      // }}
    >
      <Tab.Screen name="CircleTimer" component={CircleTimer} />
      <Tab.Screen name="Steps" children={() => <Steps mode={mode} />} />
      <Tab.Screen
        name="ThemeChanger"
        component={ThemeChanger}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity onPress={() => toggleMode()}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                  padding: 5,
                  borderRadius: 30,
                  backgroundColor: "red",
                  marginTop: -20,
                }}
              >
                <PlusIcon
                  color="black"
                  style={{ color: "#fff" }}
                  name="plus"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
