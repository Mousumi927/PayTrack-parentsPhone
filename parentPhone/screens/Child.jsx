import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  View,
  TouchableOpacity,
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
  let obj = {}
  const [data, setData] = useState("");
  const [transaction, setTransaction] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "parents", `${auth.currentUser.uid}`, "child")
      );
      querySnapshot.forEach(async (doc) => {
        const querySnapshot1 = await getDocs(
          query(collection(db, "children"), where("__name__", "==", doc.id))
        );
        // const q = query(collection(db, "cities"), where("Document ID", "==", doc.id));
        querySnapshot1.forEach((doc) => {
          setData((oldData) => [...oldData, doc.data()]);
          console.log(doc.data())
          obj[doc.data().uid] = doc.data().profile;

           setImages(oldData=>[...oldData, obj])
        });
      });

      querySnapshot.forEach(async (doc) => {
        const qTransactions = await getDocs(
          collection(db, "transactions", `${doc.id}`, "transaction")
        );

        qTransactions.forEach((doc) => {
          setTransaction((data) => [...data, doc.data()]);
          console.log(doc.data());
        });
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

      <View style={styles.childView}>
        <FlatList
          horizontal={false}
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChildProfile", { childData: item })
              }
            >
              <View style={styles.list}>
                <Image source={{ uri: item.profile }} style={styles.listImg} />
                <Text style={styles.listText}>{item.name}</Text>
                <Text style={styles.listText}>${item.chq}</Text>
                <Icon
                  name="chevron-right"
                  size={25}
                  color="#e1e3e6"
                  style={styles.arrowIcon}
                />
              </View>
            </TouchableOpacity>
          
          )}
          keyExtractor={this.index}
        />
        <Icon
          name="plus"
          size={30}
          color="#0066FF"
          style={styles.icon1}
          onPress={() => navigation.navigate("AddChild")}
        />
      </View>
      <View style={styles.transactionsView}>
        <View style={styles.textTranHeading}>
          <Text style={styles.listText}>Transactions</Text>
        </View>
        <FlatList
          horizontal={false}
          data={transaction}
          extraData={images}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <View style={styles.list}>
                <Text style={styles.listTextT}>{item.date}</Text>
                <Image source={{ uri: item.profile }} style={styles.listImgT} />
                <Text style={styles.listTextT}>${item.amount}</Text>
                <Text style={styles.listTextT}>{item.store}{data.name}</Text>
               
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={this.index}
        />
      </View>
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
    marginTop: 0,
    marginBottom: 20,
    width: "100%",
    height: 270,
    resizeMode: "cover",
    backfaceVisibility: "hidden",
  },

  childView: {
    borderWidth: 1,
    height: 220,
    borderRadius: 25,
    width: "92%",
    marginLeft: "4%",
    borderColor: "#0066FF",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    position: "absolute",
    top: 200,
  },

  transactionsView: {
    marginTop: 170,
    borderWidth: 1,
    height: 350,
    borderRadius: 25,
    width: "92%",
    marginLeft: "4%",
    borderColor: "#0066FF",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  listImg: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    margin: 5,
  },
  listImgT:{
    width: 75,
    height: 75,
    borderRadius: 37.5,
    margin: 5,
    borderWidth:.3
  },
  icon: {
    marginLeft: "89%",
    marginTop: 30,
    position: "absolute",
  },
  icon1: {
    marginLeft: "90%",
    marginBottom: 5,
    // marginTop: 70,
    // position: "absolute",
  },
  list: {
    borderBottomWidth: 0.3,
    borderColor: "#0066FF",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  listText: {
    color: "#3b3c3d",
    fontSize: 30,
    fontWeight: "bold",
  },
  listTextT: {
    color: "#3b3c3d",
    fontSize: 20,
    margin:10
  },
  textTranHeading: {
    backgroundColor: "#e1e3e6",
    alignItems: "center",
    height: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
  },
  arrowIcon: {
    position: "absolute",
    right: 20,
  },
});
