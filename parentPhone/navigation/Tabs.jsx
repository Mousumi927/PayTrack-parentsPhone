import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Accounts from '../screens/Accounts';
import Child from '../screens/Child';
import More from '../screens/More';
import Notifications from '../screens/Notifications';
import { auth,db } from "../config/firebase.js";
import Icon from "react-native-vector-icons/FontAwesome5";


const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const Tabs = () => {
  const [data, setData] = useState([])
//  useEffect(() => {
//     const getData = async () => {
//       const querySnapshot = await getDocs(
//         collection(db, "request", `${auth.currentUser.uid}`, "child")
//       );
//       querySnapshot.forEach(async (doc) => {
//         const querySnapshot1 = await getDocs(
//           query(collection(db, "children"), where("__name__", "==", doc.id))
//         );
//         // const q = query(collection(db, "cities"), where("Document ID", "==", doc.id));
//         querySnapshot1.forEach((doc) => {
//           setData((oldData) => [...oldData, doc.data()]);
//           console.log(doc.data())
//           obj[doc.data().uid] = doc.data().profile;

//            setImages(oldData=>[...oldData, obj])
//         });
//       });

//       querySnapshot.forEach(async (doc) => {
//         const qTransactions = await getDocs(
//           collection(db, "transactions", `${doc.id}`, "transaction")
//         );

//         qTransactions.forEach((doc) => {
//           setTransaction((data) => [...data, doc.data()]);
//           console.log(doc.data());
//         });
//       });
//     };
//     getData();
//   }, []);
console.log('data.count', data.length)
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:"#0066FF"}}  >
    <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color})=> (<Icon name="home" size={25} color={color} />)}} />
    <Tab.Screen name="Accounts" component={Accounts} options={{tabBarIcon: ({color})=> (<Icon name="credit-card" size={25} color={color} />)}} />
    <Tab.Screen name="Child" component={Child} options={{tabBarIcon: ({color})=> (<Icon name="child" size={25} color={color} />)}} />
    <Tab.Screen name="Notifications" component={Notifications} options={{tabBarIcon: ({color})=> (<Icon name="bell" size={25} color={color} />),  tabBarBadge:data.length}} />
  </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({

})