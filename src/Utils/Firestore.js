import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDupqUCukAH_rN8Y1IiWz8V_dQ4MWyu-B4",
    authDomain: "taoyuanapp-dd324.firebaseapp.com",
    databaseURL: "https://taoyuanapp-dd324.firebaseio.com",
    projectId: "taoyuanapp-dd324",
    storageBucket: "taoyuanapp-dd324.appspot.com",
    messagingSenderId: "611915165536",
    appId: "1:611915165536:web:5fe75655c8af2f80"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase