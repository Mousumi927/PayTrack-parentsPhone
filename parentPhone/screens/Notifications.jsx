import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const MyComponent = () => {
  const [tableData, setTableData] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      name: "",
      requestAmount: "",
    };
    setTableData((prevData) => [...prevData, newItem]);
  };

  const handleNameChange = (text, index) => {
    const newData = [...tableData];
    newData[index].name = text;
    setTableData(newData);
  };

  const handleRequestAmountChange = (text, index) => {
    const newData = [...tableData];
    newData[index].requestAmount = text;
    setTableData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={[styles.columnHeader, styles.columnCenter]}>Name</Text>
        <Text style={[styles.columnHeader, styles.columnCenter]}>
          Request Amount
        </Text>
      </View>
      <FlatList
        data={tableData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={item.name}
              onChangeText={(text) => handleNameChange(text, index)}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              value={item.requestAmount}
              onChangeText={(text) => handleRequestAmountChange(text, index)}
              placeholder="Request Amount"
              keyboardType="numeric"
            />
          </View>
        )}
      />
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  tableHeader: {
    flexDirection: "row",
    marginBottom: 8,
  },
  columnHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 150,
  },
  columnCenter: {
    textAlign: "center", // Align column names in the center
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  addButton: {
    color: "#0066FF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
