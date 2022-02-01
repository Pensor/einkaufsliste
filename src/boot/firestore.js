// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// Required for side-effects
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn1jPp3Ilg6enYtv50cpz-3uewzwMpKoI",
  authDomain: "einkaufsliste-1250b.firebaseapp.com",
  databaseURL: "https://einkaufsliste-1250b.firebaseio.com",
  projectId: "einkaufsliste-1250b",
  storageBucket: "einkaufsliste-1250b.appspot.com",
  messagingSenderId: "497668696065",
  appId: "1:497668696065:web:ecdf3c6fa8d8b8fe78b800"
};


export default ({ app }) => {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app.config.globalProperties.$db = firebase.firestore();
  app.config.globalProperties.$firebase = firebase;
}
