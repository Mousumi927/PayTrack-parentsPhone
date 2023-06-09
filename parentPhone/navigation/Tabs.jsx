import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Accounts from '../screens/Accounts';
import Child from '../screens/Child';
import More from '../screens/More';
import { auth } from "../config/firebase.js";


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={Accounts} />
    <Tab.Screen name="Child" component={Child} />
    <Tab.Screen name="More" component={More} />
  </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})