import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// firebaseConfig is the configuration key values used by firebase to locate/identified your project 
const firebaseConfig = {
  apiKey: "AIzaSyBLVVvlBRkhGQXvVRm-jZ0SsXesxfqsQUA",
  authDomain: "crwn-clothing-41649.firebaseapp.com",
  projectId: "crwn-clothing-41649",
  storageBucket: "crwn-clothing-41649.appspot.com",
  messagingSenderId: "944069216150",
  appId: "1:944069216150:web:feec99df2ce72f2d91ffb7",
  measurementId: "G-0W2J53E49F"

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// We are using google as a the provider to get an auth key to authenticate our users. We also set the prompt parameter to force the selection of an account.  
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,

        ...additionalInformation
      });
    } catch (error){
    console.log('error creating user', error.message)
    }
  }
  // userDocRef will contain the details/data of our user if created else it will contain null
  return userDocRef;
};

// createUserWithEmailAndPassword() is from firebase to authemticate a user with only an email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth); 

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);