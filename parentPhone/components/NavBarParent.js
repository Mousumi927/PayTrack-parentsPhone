import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function NavBarParent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.button1}>
          <MaterialCommunityIconsIcon
            name="home-outline"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.home}>HOME</Text>
        </View>
        <View style={styles.button2}>
          <MaterialCommunityIconsIcon
            name="credit-card-multiple"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.accounts}>ACCOUNTS</Text>
        </View>
        <TouchableOpacity style={styles.button3}>
          <MaterialCommunityIconsIcon
            name="face"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.child}>CHILD</Text>
        </TouchableOpacity>
        <View style={styles.button4}>
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.more}>MORE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(74,74,74,1)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  rect: {
    width: 440,
    height: 64,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  button1: {
    paddingHorizontal: 12,
    maxWidth: 168,
    justifyContent: "center",
    alignSelf: "flex-start",
    width: 88
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
    margin: 0,
    left: 35,
    width: 24,
    top: 0,
    height: 26,
    alignSelf: "center"
  },
  home: {
    color: "#FFFFFF",
    opacity: 0.8,
    margin: 0,
    fontSize: 12,
    textAlign: "center",
    left: 17,
    top: 52,
    alignSelf: "center",
    width: 82,
    height: 17
  },
  button2: {
    paddingHorizontal: 12,
    maxWidth: 168,
    justifyContent: "center",
    alignSelf: "flex-start",
    height: 43
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
    alignSelf: "center"
  },
  accounts: {
    color: "#FFFFFF",
    fontSize: 12,
    opacity: 0.8,
    paddingTop: 4,
    width: 88,
    height: 21,
    alignSelf: "center",
    textAlign: "center"
  },
  button3: {
    paddingHorizontal: 12,
    maxWidth: 168,
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
    alignSelf: "center"
  },
  child: {
    color: "#FFFFFF",
    opacity: 0.8,
    width: 59,
    height: 17,
    alignSelf: "center",
    fontSize: 12,
    textAlign: "center"
  },
  button4: {
    paddingHorizontal: 12,
    maxWidth: 168,
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  icon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
    alignSelf: "center"
  },
  more: {
    color: "#FFFFFF",
    opacity: 0.8,
    width: 65,
    height: 17,
    alignSelf: "center",
    fontSize: 12,
    textAlign: "center"
  }
});

export default NavBarParent;
