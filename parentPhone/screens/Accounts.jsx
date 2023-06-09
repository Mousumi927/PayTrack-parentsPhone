import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Accounts = () => {
  return (
    <View>
      <Text style={styles.root}>Accounts</Text>
    </View>
  )
}

export default Accounts

const styles = StyleSheet.create({
  root: {
    textAlign:"center",
    marginTop:"50%"
   },
})