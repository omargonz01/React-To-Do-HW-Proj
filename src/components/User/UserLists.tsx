import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration here
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (user) {
      db.collection('users').doc(user.uid).onSnapshot(doc => {
        const lists = doc.data().lists;
        // Do something with the lists
      });
    }
  });
  

