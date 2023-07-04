import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Center } from "@builderx/utils";
import Icon from "react-native-vector-icons/Entypo";

function AccountsOverviewRow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Center>
        <Text style={styles.accountsOverview}>Accounts Overview</Text>
      </Center>
      <Center vertical>
        <Icon name="dots-three-vertical" style={styles.threeDots}></Icon>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 4,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(74,74,74,1)"
  },
  accountsOverview: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    padding: 0,
    margin: 0,
    width: 208,
    height: 28,
    paddingLeft: 0,
    alignSelf: "flex-start"
  },
  threeDots: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    right: 4,
    width: 32
  }
});

export default AccountsOverviewRow;
