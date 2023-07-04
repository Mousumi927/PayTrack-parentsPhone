import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SeeMoreRow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.viewAllFiller}></View>
      <Text style={styles.viewAll}>View All</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(126,211,33,1)",
    padding: 4,
    flexDirection: "row"
  },
  viewAllFiller: {
    flex: 1,
    flexDirection: "row"
  },
  viewAll: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    width: 73,
    height: 24,
    marginRight: 17,
    alignSelf: "center"
  }
});

export default SeeMoreRow;
