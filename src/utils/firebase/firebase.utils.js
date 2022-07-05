import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

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
  prompt: "select_account"
});

// auth is used as a global variable to key track of all authentication being done regardless of the provider 
export const auth = getAuth();
// ThesignInWithGooglePopup function creates a pop up screen to let the user sign in with the google services
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// The getFirestore() gets the database used in the project from our firebase
export const db= getFirestore();

// createUserDocumentFromAuth is a custom function created to authenticate the user with the information given when they sing up thru the variable userAuth
// the object additionalInfomation will contain the displayName in the case we dont use google as our provider and authenticate with email and password 
const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  // it checks if there is information in userAuth if not returns and does not run the function else
  if(!userAuth) return;
  // we obtain the collection from our firebase database 
  const userDocRef = doc(db, 'users', userAuth.uid);
  // Then we get the document/details of that specific user using the getDoc()
  const userSnapshot = await getDoc(userDocRef);

  // Since we will write into the collection to create a user a try/catch error handleing is needed just incase there is issues with firebase 
  try{
    // We first check if there is a document/details of the user that exixts in our databse if not we will just return a null userDocRef 
    if(!userSnapshot.exist()){
      // From userAuth details we destructure the variables we will use to create the new user 
      const { displayName, email } =userAuth;
      const createdAt = new Date(); 

      // We pass in the values of the user to setDoc() to create a new user in our collection
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }
  } catch (error){
    console.log('error creating user', error.message)
  }
  // userDocRef will contain the details/data of our user if created else it will contain null
  return userDocRef;
}

// createUserWithEmailAndPassword() is from firebase to authemticate a user with only an email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};