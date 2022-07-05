import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

  return (
    <div>
      <h1>sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  );
};


export default SignIn;
//import {
//  signInWithGooglePopup,
//  createUserProfileDocument,
//} from '../../utils/firebase/firebase.utils';
//
//const SignIn = () => {
//  const logGoogleUser = async () => {
//    const response = await signInWithGooglePopup();
//    createUserProfileDocument(response);
//  };
//
//  return (
//    <div>
//      <h1>Sign In Page</h1>
//      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
//    </div>
//  );
//};
//
//export default SignIn;
