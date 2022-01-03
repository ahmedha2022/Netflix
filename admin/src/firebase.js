import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZqnjvrc63CqAbhSf1mEiZ4_v7RZF7MtU",
  authDomain: "netflix-mern-47412.firebaseapp.com",
  projectId: "netflix-mern-47412",
  storageBucket: "netflix-mern-47412.appspot.com",
  messagingSenderId: "512847154296",
  appId: "1:512847154296:web:c4f174f798d4ea205a718d"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
