import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function SavingsRow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="chevron-right" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(126,211,33,1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    width: 40,
    marginLeft: 374,
    alignSelf: "center"
  }
});

export default SavingsRow;
