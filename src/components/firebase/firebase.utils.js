import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // Your web app's Firebase configuration
  apiKey: 'AIzaSyCHZczgclj0QWL94x0TDzwzaG0t-WnTEN8',
  authDomain: 'beck-clothing-store-db.firebaseapp.com',
  databaseURL: 'https://beck-clothing-store-db.firebaseio.com',
  projectId: 'beck-clothing-store-db',
  storageBucket: 'beck-clothing-store-db.appspot.com',
  messagingSenderId: '970049247910',
  appId: '1:970049247910:web:179c5ee734bf6d44d4b267'
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
