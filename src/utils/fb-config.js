import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDEf9J6433dmhoYVIA85swnEORDrkm8NXg",
  authDomain: "reacttestfooddelivery.firebaseapp.com",
  databaseURL: "https://reacttestfooddelivery-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reacttestfooddelivery",
  storageBucket: "reacttestfooddelivery.appspot.com",
  messagingSenderId: "762871645827",
  appId: "1:762871645827:web:5fa9dc080bcec461affdb6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;