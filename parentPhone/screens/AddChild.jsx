import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput, Button, TouchableOpacity
} from "react-native";
import React, {useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';
import Icon from "react-native-vector-icons/FontAwesome5";


const AddChild = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage} >
        <Icon name="camera" size={60} color="#194280" style={styles.Icon} />
        <Image
         placeholder={require("../images/logo.png")}
          source={{ uri: image }}
          style={styles.img}
        /></TouchableOpacity>
      
      
      <TextInput style={styles.input} placeholder="Name?" />
      <TextInput style={styles.input} placeholder="Address?" />
      <TextInput style={styles.input} placeholder="School?" onPress={showDatePicker} />
      <Button style={styles.btn} title="Date of birth?" onPress={showDatePicker} />
      <DateTimePickerModal
        isDarkModeEnabled
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      
      />
      <TouchableOpacity style={styles.btn}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity></View>
    </SafeAreaView>
  );
};

export default AddChild;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    width:"100%",
    height:"100%",
    
  },
  container: {
    marginTop:"15%",
    alignItems: "center",
  },
  img: {
    width: 170,
    height: 170,
    borderRadius: 200 / 2,
    borderWidth:.5,
    marginBottom:30
    
    },
  input: {
    height: 40,
    borderBottomWidth: 0.5,
    // marginTop:10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
    width:"90%"

  },
  btn:{
    backgroundColor:"#194280",
    borderRadius: 30,
    width: "70%",
    marginTop: 20,
    height: 55,

  },
  Icon:{
    position:"absolute",
    marginLeft:"17%",
    marginTop:"18%"

  }
});
