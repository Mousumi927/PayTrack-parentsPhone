import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  const [chequingBalance, setChequingBalance] = useState(1000);
  const [savingsBalance, setSavingsBalance] = useState(9000);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chequing Account Balance:</Text>
        <Text style={styles.balance}>{`$${chequingBalance}`}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Savings Account Balance:</Text>
        <Text style={styles.balance}>{`$${savingsBalance}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 16,
  },
});
