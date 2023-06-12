import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Login from "./components/Login";
import Tabs from "./navigation/Tabs";
import AddChild from "./screens/AddChild";
import { auth } from "./config/firebase";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accounts from "./screens/Accounts";
import ContextProvider from "./context/ContextProvider";
import { useContext } from "react";
import { appContext } from "./context/ContextProvider";
import Notifications from "./screens/Notifications";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  user = auth.currentUser;
  return (
    <ContextProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Screen name="Login" component={Login} />
          <Screen name="Tabs" component={Tabs} />
          <Screen name="AddChild" component={AddChild} />
          <Screen name="Notifications" component={Notifications} />

          {/* {user ? <Tabs/>: <Login/>} */}
        </Navigator>
        
      </NavigationContainer>
    </ContextProvider>
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
