import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Child = ({navigation}) => {
  // const image = require("../images/istockphoto-1367828137-612x612.jpg");
  const image = "hello";
  return (
    <View style={styles.root}>
      <Image
        source={require("../images/istockphoto-1367828137-612x612.jpg")}
        style={styles.img}
      />
      <Icon name="bell" size={30} color="blue" style={styles.icon} />
      <Icon name="plus" size={30} color="blue" style={styles.icon1} onPress={()=> navigation.navigate('AddChild')}/>
      <View style={styles.childView}>
        <FlatList
          horizontal={true}
          data={image}
          renderItem={({ item, index }) => (
            <>
              <Image source={item} style={styles.listImg} />
              <Text>{item}</Text>
            </>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.transactionsView}></View>
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  img: {
    marginTop: 25,
    width: "100%",
    height: 170,
    resizeMode: "center",
    backfaceVisibility: "hidden",
  },

  childView: {
    borderWidth: 1,
    height: "25%",
    borderRadius: "15%",
    width: "95%",
    marginLeft: "2.5%",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  transactionsView: {
    marginTop: 20,
    borderWidth: 1,
    height: "35%",
    borderRadius: "15%",
    width: "95%",
    marginLeft: "2.5%",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  listImg: {
    width: 100,
    height: 100,
  },
  icon: {
    marginLeft: "89%",
    marginTop: 30,
    position: "absolute",
  },
  icon1: {
    marginLeft: "89%",
    marginTop: 70,
    position: "absolute",
  },
});
