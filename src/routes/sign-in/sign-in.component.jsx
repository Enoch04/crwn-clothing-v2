import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  // logGoogleUser is used as an option to allowed the user to sign-in or sign-up with a google account this will also authenticate the user in the proccess
  // it will leverage the functions from firebase.utils.js
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <SignUpForm />
    </div>
  );
};


export default SignIn;
