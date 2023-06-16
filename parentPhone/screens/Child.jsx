import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { storage, auth } from "../config/firebase";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const Child = ({ navigation }) => {
  // const image = require("../images/istockphoto-1367828137-612x612.jpg");
  const image = ["hello"];
  const [imageList, setImageList] = useState("");

  useEffect(() => {
    setImageList("");
    const imageListRef = ref(storage, `images/${auth.currentUser.uid}`);
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((oldList) => [...oldList, url]);
          console.log(imageList)
        });
      });
    });

    const getData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "parents", `${auth.currentUser.uid}`, "child")
      );
      querySnapshot.forEach(async (doc) => {
        console.log(doc.id);
         const querySnapshot1 = await getDocs(query(collection(db, "children"), where("__name__", "==", doc.id)));
      // const q = query(collection(db, "cities"), where("Document ID", "==", doc.id));
        querySnapshot1.forEach((doc)=>{
          
          

        })

      
      });
    };

    getData();
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Image
        source={require("../images/istockphoto-1367828137-612x612.jpg")}
        style={styles.img}
      />
      <Icon
        name="bell"
        size={30}
        color="#0066FF"
        style={styles.icon}
        onPress={() => navigation.navigate("Notifications")}
      />
      <Icon
        name="plus"
        size={30}
        color="#0066FF"
        style={styles.icon1}
        onPress={() => navigation.navigate("AddChild")}
      />
      <View style={styles.childView}>
        <FlatList
          horizontal={false}
          data={imageList}
          renderItem={({ item, index }) => (
            <View style={styles.list}>
              <Image source={{ uri: item }} style={styles.listImg} />
              {/* <Text>{item}</Text> */}
            </View>
          )}
          keyExtractor={(item) => item.item}
        />
      </View>
      <View style={styles.transactionsView}></View>
    </ScrollView>
  );
};

export default Child;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#e3e2de",
    width: "100%",
    height: "100%",
  },

  img: {
    marginTop: -10,
    marginBottom: 20,
    width: "100%",
    height: 220,
    resizeMode: "cover",
    backfaceVisibility: "hidden",
  },

  childView: {
    borderWidth: 1,
    height: 220,
    borderRadius: "15%",
    width: "95%",
    marginLeft: "2.5%",
    borderColor: "#0066FF",
    backgroundColor: "white",
  },

  transactionsView: {
    marginTop: 20,
    borderWidth: 1,
    height: 280,
    borderRadius: "15%",
    width: "95%",
    marginLeft: "2.5%",
    borderColor: "#0066FF",
    backgroundColor: "white",
  },
  listImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5,
  },
  icon: {
    marginLeft: "89%",
    marginTop: 30,
    position: "absolute",
  },
  icon1: {
    marginLeft: "89%",
    marginTop: 70,
    position: "absolute",
  },
  list: {
    borderBottomWidth: 0.3,
    borderColor: "#0066FF",
  },
});
