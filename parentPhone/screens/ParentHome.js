import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import AccountsOverviewRow from "../components/AccountsOverviewRow";
import ChequingRow from "../components/ChequingRow";
import SavingsRow from "../components/SavingsRow";
import CreditCardRow from "../components/CreditCardRow";
import SeeMoreRow from "../components/SeeMoreRow";
import NomiRow from "../components/NomiRow";
import SearchNomiRow from "../components/SearchNomiRow";
import Icon from "react-native-vector-icons/Entypo";
import NavBarParent from "../components/NavBarParent";

function ParentHome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rBCBankingBackgroundColumn}>
        <Image
          source={require("../assets/images/RBCBankingAppTopBackground.jpg")}
          resizeMode="cover"
          style={styles.rBCBankingBackground}
        ></Image>
        <View style={styles.bottomBorderNOMI}></View>
        <View style={styles.accountsOverviewRowStack}>
          <AccountsOverviewRow
            style={styles.accountsOverviewRow}
          ></AccountsOverviewRow>
          <View style={styles.chequing}>
            <View style={styles.chequingRowStack}>
              <ChequingRow style={styles.chequingRow}></ChequingRow>
              <Text style={styles.chequing9287}>Chequing (9287)</Text>
              <Text style={styles.chequingBalance}>$12,345.67</Text>
            </View>
          </View>
        </View>
        <View style={styles.savings}>
          <View style={styles.savingsRowStack}>
            <SavingsRow style={styles.savingsRow}></SavingsRow>
            <Text style={styles.savings1460}>Savings (1460)</Text>
            <Text style={styles.savingsBalance}>$250,000.00</Text>
          </View>
        </View>
        <View style={styles.creditCard}>
          <View style={styles.creditCardRowStack}>
            <CreditCardRow style={styles.creditCardRow}></CreditCardRow>
            <Text style={styles.visa6290}>VISA (6290)</Text>
            <Text style={styles.creditCardBalance}>$350.00</Text>
          </View>
        </View>
        <SeeMoreRow style={styles.seeMoreRow}></SeeMoreRow>
        <NomiRow style={styles.nOMIrow}></NomiRow>
        <View style={styles.nOMIBalanceRow}>
          <View style={styles.stackFiller}></View>
          <View style={styles.searchNOMIRowStack}>
            <SearchNomiRow style={styles.searchNOMIRow}></SearchNomiRow>
            <Icon name="chevron-right" style={styles.icon}></Icon>
            <Text style={styles.nOMIBalance}>$4200.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.rBCBankingBackgroundColumnFiller}></View>
      <NavBarParent style={styles.navbarParent}></NavBarParent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rBCBankingBackground: {
    width: 439,
    height: 277
  },
  bottomBorderNOMI: {
    width: 414,
    height: 27,
    backgroundColor: "#E6E6E6",
    marginTop: 416,
    marginLeft: 12
  },
  accountsOverviewRow: {
    height: 69,
    width: 414,
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(74,74,74,1)",
    left: 0
  },
  chequing: {
    top: 68,
    left: 0,
    width: 414,
    height: 56,
    position: "absolute"
  },
  chequingRow: {
    height: 56,
    width: 414,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(65,117,5,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  chequing9287: {
    top: 20,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16
  },
  chequingBalance: {
    top: 19,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    right: 45,
    textAlign: "justify"
  },
  chequingRowStack: {
    width: 414,
    height: 56
  },
  accountsOverviewRowStack: {
    width: 414,
    height: 124,
    marginTop: -443,
    marginLeft: 12
  },
  savings: {
    width: 414,
    height: 56,
    marginLeft: 12
  },
  savingsRow: {
    height: 56,
    width: 414,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(65,117,5,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  savings1460: {
    top: 20,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16
  },
  savingsBalance: {
    top: 19,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    right: 45,
    textAlign: "justify"
  },
  savingsRowStack: {
    width: 414,
    height: 56
  },
  creditCard: {
    width: 414,
    height: 56,
    marginLeft: 12
  },
  creditCardRow: {
    height: 56,
    width: 414,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(65,117,5,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  visa6290: {
    top: 19,
    left: 20,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16
  },
  creditCardBalance: {
    top: 19,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    textAlign: "justify",
    right: 45
  },
  creditCardRowStack: {
    width: 414,
    height: 56
  },
  seeMoreRow: {
    height: 56,
    width: 414,
    backgroundColor: "rgba(65,117,5,1)",
    marginLeft: 12
  },
  nOMIrow: {
    height: 67,
    width: 414,
    marginLeft: 12
  },
  nOMIBalanceRow: {
    width: 414,
    height: 57,
    flexDirection: "row",
    marginLeft: 12
  },
  stackFiller: {
    flex: 1,
    flexDirection: "row"
  },
  searchNOMIRow: {
    height: 57,
    width: 414,
    position: "absolute",
    left: 0,
    top: 0
  },
  icon: {
    top: 5,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    right: 0
  },
  nOMIBalance: {
    top: 19,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    right: 40
  },
  searchNOMIRowStack: {
    width: 414,
    height: 57
  },
  rBCBankingBackgroundColumn: {
    width: 439,
    marginLeft: -12
  },
  rBCBankingBackgroundColumnFiller: {
    flex: 1
  },
  navbarParent: {
    height: 87,
    width: 414,
    overflow: "hidden",
    alignSelf: "center"
  }
});

export default ParentHome;
