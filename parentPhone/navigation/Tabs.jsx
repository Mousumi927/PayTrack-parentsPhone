import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Accounts from '../screens/Accounts';
import Child from '../screens/Child';
import More from '../screens/More';
import { auth } from "../config/firebase.js";
import Icon from "react-native-vector-icons/FontAwesome5";
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

const Tabs = () => {


  return (

    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:"#194280"}}  >
    <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color})=> (<Icon name="home" size={25} color={color} />)}} />

    <Tab.Screen name="Accounts" component={Accounts} options={{tabBarIcon: ({color})=> (<Icon name="credit-card" size={25} color={color} />)}} />
    <Tab.Screen name="Child" component={Child} options={{tabBarIcon: ({color})=> (<Icon name="child" size={25} color={color} />)}} />
    <Tab.Screen name="More" component={More} options={{tabBarIcon: ({color})=> (<Icon name="bars" size={25} color={color} />), tabBarBadge:3}} />
  </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({

 
})