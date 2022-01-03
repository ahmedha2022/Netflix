import firebase from "firebase";

const firebaseConfig = {
  
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
