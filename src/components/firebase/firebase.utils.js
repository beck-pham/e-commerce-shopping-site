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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;
  // query the user using uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // get a snapShot of that user
  const snapShot = await userRef.get(); //console.log(snapShot);

  // create a new user if it doesn't exist in the database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...addtionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
