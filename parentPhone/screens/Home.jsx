import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Picture covering 1/4 of the height with 100% width */}
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Header */}
      <View style={styles.accountOverview}>
        <Text style={styles.header}>Accounts Overview</Text>
        <Icon name="ellipsis-v" size={20} color="#000000" style={styles.Icon} />
      </View>

      <View style={styles.accountContainer}>
        {/* Account Details */}
        <View style={styles.accountRow}>
          <Text style={styles.accountType}>Checking Account (9287)</Text>
          <Text style={styles.accountAmount}>2,500.00</Text>
        </View>

        <View style={styles.accountRow}>
          <Text style={styles.accountType}>Savings Account (3019)</Text>
          <Text style={styles.accountAmount}>5,000.00</Text>
        </View>

        <View style={styles.accountRow}>
          <Text style={styles.accountType}>Visa (3938)</Text>
          <Text style={styles.accountAmount}>1,200.00</Text>
        </View>

        <View style={styles.accountRowLast}>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
      </View>
      <View style={styles.accountOverview}>
        <Text style={styles.header}>NOMI</Text>
        <Icon name="ellipsis-v" size={20} color="#000000" style={styles.Icon} />
      </View>
      <View style={styles.accountContainer}>
        {/* Account Details */}
        <View style={styles.accountRow}>
          <Text style={styles.accountType}>LOC (9287)</Text>
          <Text style={styles.accountAmount}>2,500.00</Text>
        </View>

        <View style={styles.accountRowLast}>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "33%",
    width: "100%",
  },
  accountOverview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  accountContainer: { backgroundColor: "#ffffff" },
  accountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  accountRowLast: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  accountType: {
    fontSize: 18,
    fontWeight: "bold",
  },
  accountAmount: {
    fontSize: 18,
  },
  viewAllRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  viewAllText: {
    fontSize: 16,
    color: "blue",
    textAlign: "right", // Align "View All" to the right side
  },
  additionalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  additionalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
