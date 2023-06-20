import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const ChildProfile = ({ route, navigation }) => {
  const { childData } = route.params;
  console.log(childData);
  return (
    <View style={styles.root}>
      <Icon
        name="chevron-left"
        size={30}
        color="#0066FF"
        style={{ marginLeft: 20, marginTop: 50 }}
        onPress={() => navigation.navigate("Tabs")}
      />
      <View style={{ top:250, left:30 , position:"absolute"}}>
      <Image source={require("../images/account-recharge.png")} style={{width:70, height:70,}} />
      <Text style={{fontSize:20, textAlign:"center"}}>Refill</Text></View>

      <View style={{ top:250, right:30 , position:"absolute"}}>
      <Image source={require("../images/freeze.png")} style={{width:70, height:70,}} />
      <Text style={{fontSize:20, textAlign:"center"}}>Freeze</Text></View>

      <View style={styles.imgView}>
        <Image source={{ uri: childData.profile }} style={styles.profileImg} /></View>
   <View style={{alignItems:"center", top:18}}><Text style={styles.name}>{childData.name}</Text></View> 
      
      <View style={styles.transactionsView}>
        <View style={styles.textTranHeading}>
          <Text style={styles.listText}>Summary</Text>
        </View>
        <FlatList renderItem={({ item, index }) => {}} />
      </View>
    </View>
  );
};

export default ChildProfile;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    height: "100%",
  },
  imgView: {
    top: 20,
    alignItems: "center",
    shadowColor:"black",
    shadowOffset:{
        height:0,
        width:0
    },
    shadowOpacity:1,
    shadowRadius: 4
  },

  profileImg: {
    borderWidth: 0.3,
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: 200 / 2,
    
  },
  name: {
    fontSize: 50,
  },
  transactionsView: {
    marginTop: 40,
    borderWidth: 1,
    height: 450,
    borderRadius: 75,
    width: "92%",
    marginLeft: "4%",
    borderColor: "black",
    backgroundColor: "white",
    shadowColor:"black",
    shadowOffset:{
        height:0,
        width:0
    },
    shadowOpacity:1,
    shadowRadius:4
  },
  listText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textTranHeading: {
    overflow: "hidden",
    // backgroundColor: "#e1e3e6",
    borderColor: "black",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 60,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 80,
    justifyContent: "center",
  },
});
