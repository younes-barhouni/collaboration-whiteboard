import * as firebase from 'firebase';

// import "firebase/database"
// require('dotenv').config();


// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FB_Key,
//   authDomain: process.env.REACT_APP_FB_authDomain,
//   databaseURL: process.env.REACT_APP_FB_databaseURL,
//   projectId: process.env.REACT_APP_FB_projectId,
//   storageBucket: process.env.REACT_APP_FB_storageBucket,
//   messagingSenderId: process.env.REACT_APP_FB_messagingSenderId,
//   appId: process.env.REACT_APP_FB_appId,
//   measurementId: process.env.REACT_APP_FB_measurementId
// };

const firebaseConfig = {
  apiKey: "AIzaSyAap7i3RvYblxkWaiLDMTZy-17UARpFThY",
  authDomain: "whiteboard-a11bd.firebaseapp.com",
  databaseURL: "https://whiteboard-a11bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whiteboard-a11bd",
  storageBucket: "whiteboard-a11bd.appspot.com",
  messagingSenderId: "1068717657079",
  appId: "1:1068717657079:web:122fd2a353c7c66bf07cf2"
};

firebase.initializeApp(firebaseConfig);


// Initialize Firebase
export const database = firebase.database();
// firebase.analytics()


// export const editorRef = databaseRef.child("editor")
