import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

function SearchNomiRow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconRow}>
        <Icon name="target" style={styles.icon}></Icon>
        <Text style={styles.nomiFindSave}>NOMI Find &amp; Save</Text>
      </View>
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
    color: "rgba(0,0,0,1)",
    fontSize: 36
  },
  nomiFindSave: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 11,
    marginTop: 10
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 171,
    marginLeft: 11,
    marginTop: 8
  }
});

export default SearchNomiRow;
