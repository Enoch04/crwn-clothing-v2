import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db= getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  try{
    if(!userSnapshot.exist()){
      const { displayName, email } =userAuth;
      const createdAt = new Date();
      
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
  } catch (error){
    console.log('error creating user', error.message)
  }

  return userDocRef;
}

//import { initializeApp } from 'firebase/app';
//import {
//  getAuth,
//  signInWithRedirect,
//  signInWithPopup,
//  GoogleAuthProvider,
//} from 'firebase/auth';
//
//const firebaseConfig = {
//  apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
//  authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
//  projectId: 'crwn-clothing-db-98d4d',
//  storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
//  messagingSenderId: '626766232035',
//  appId: '1:626766232035:web:506621582dab103a4d08d6',
//};
//
//const firebaseApp = initializeApp(firebaseConfig);
//
//const provider = new GoogleAuthProvider();
//
//provider.setCustomParameters({
//  prompt: 'select_account',
//});
//
//export const createUserProfileDocument = async (userAuth, additionalData) => {
//  if (!userAuth) return;
//
//  console.log(userAuth);
//};
//
//export const auth = getAuth();
//export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
