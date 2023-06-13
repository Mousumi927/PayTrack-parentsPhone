import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  Button,
  TouchableOpacity, ImageBackground
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import moment from 'moment';

const AddChild = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
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
    setDate(moment(date).format('L'));
    hideDatePicker();
  };

  useEffect(()=>{
    console.log(date);

  },[date]);
  return (
    <SafeAreaView style={styles.root}><ImageBackground style={styles.root} source={require("../images/blob-scene-haikei.png")}>
      <View style={styles.container}>
        <TouchableOpacity style={{width:"100%", alignItems:"center"}} onPress={pickImage}>
          <Icon name="camera" size={45} color="#0066FF" style={styles.Icon} />
          <Image
            placeholder={require("../images/logo.png")}
            source={{ uri: image }}
            style={styles.img}
          />
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder="Name?" />
        <TextInput style={styles.input} placeholder="Address?" />
        <TextInput style={styles.input} placeholder="School?" />
        <TouchableOpacity style={{flexDirection:"row", width:"100%"}} onPress={showDatePicker}><TextInput
          style={styles.inputDob}
          placeholder="Date of birth?" showSoftInputOnFocus={false} onPressIn={showDatePicker} id="DOB" value={date} />
          
        <Icon name="calendar-alt"size={40} color="#0066FF" onPress={showDatePicker} />
        <DateTimePickerModal isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          display="inline" 
        /></TouchableOpacity>
        <TextInput style={styles.input} placeholder="Email?" />
        <TextInput style={styles.input} placeholder="Password?" secureTextEntry={true} />
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
        </TouchableOpacity>
      </View></ImageBackground>
    </SafeAreaView>
  );
};

export default AddChild;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    width: "100%",
    height: "103%",
  },
  container: {
    marginTop: "6%",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 0.5,
    marginBottom: 30,
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
    width: "90%",
    borderColor:"#0066FF"
  },
  inputDob:{
    height: 40,
    borderBottomWidth: 0.5,
    // marginTop:10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
    width:"60%",
    borderColor:"#0066FF"

  },
  btn: {
    backgroundColor: "#0066FF",
    borderRadius: 30,
    width: "70%",
    marginTop: 20,
    height: 55,
  },
  Icon: {
    position: "absolute",
    marginTop: "15%",
  },
});
