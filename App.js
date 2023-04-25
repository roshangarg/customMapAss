import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./screens/Tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    async function ToggleMode() {
      // console.log(await AsyncStorage.getItem("mode"));
      if ((await AsyncStorage.getItem("mode")) !== null) {
        await AsyncStorage.setItem("mode", "light");
      }
    }
    ToggleMode();
  }, []);
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
