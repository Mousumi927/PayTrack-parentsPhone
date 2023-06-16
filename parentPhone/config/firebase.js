import Constants from "expo-constants";
// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, addDoc, collection, getFirestore } from "firebase/firestore";
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import { useState } from "react";
// import {firebase} from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
};

// Initialize Firebase  //! app = Parent,  app1 = Child
const app = initializeApp(firebaseConfig);
const app1 = initializeApp(firebaseConfig, 'Secondary' );
const auth = getAuth(app);
const auth1 = getAuth(app1);
const storage = getStorage(app);
const storage1 = getStorage(app1);
const db = getFirestore(app);
const db1 = getFirestore(app1);

export const addChild = async (
  name,
  address,
  gender,
  date,
  email,
  pwd,
  image, uid
) => {

  //!!! Adding a Child

  const response = await createUserWithEmailAndPassword(auth1, email, pwd);
  const user = response.user;
  await updateProfile(user, { displayName: name });

  //!!   Adding data to fireStore
  const docRef = doc(db1, `parents/${auth.currentUser.uid}/child`,user.uid);
  await setDoc(docRef, {
  });

  const docRef1 = doc(db1, `children`,user.uid);
  await setDoc(docRef1, {
      puid:auth.currentUser.uid ,
      uid: user.uid,
      authProvider: "local",
      name: name,
      address: address,
      gender: gender,
      date: date,
      email: email,
    });

  //!!! Image upload

  const blobImage = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", image, true);
    xhr.send(null);
  });
  const metadata = {
    contentType: "image/jpeg",
  };
  const storageRef = ref(storage1, `images/${uid}/${auth1.currentUser.uid}`);
  const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    async () => {
      // Upload completed successfully, now we can get the download URL
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );

 return "Success!";
};

export { signInWithEmailAndPassword, auth, storage, db };

// console.log(Constants.manifest.extra.apiKey);
