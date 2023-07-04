import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function CreditCardRow(props) {
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
    shadowOpacity: 1,
    shadowRadius: 1.2,
    elevation: 3
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    width: 36,
    height: 40,
    marginLeft: 375,
    alignSelf: "center"
  }
});

export default CreditCardRow;
