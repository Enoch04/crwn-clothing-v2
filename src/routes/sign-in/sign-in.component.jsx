import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

const SignIn = () => {

  // logGoogleUser is used as an option to allowed the user to sign-in or sign-up with a google account this will also authenticate the user in the proccess
  // it will leverage the functions from firebase.utils.js
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logUser = async () => {
    const {user} = await signInWithGoogleRedirect();
    const {email, password} = user;
    const userDocRef = await signInWithEmailAndPassword(email,password);
  };

  return (
    <div>
      <form>
        <FormInput label="Email" type="email" name="email"  required />
        <FormInput label="Password" type="password" name="password"  required />
        <Button onClick={logUser}>
          Sign in
        </Button>
        <Button buttonType="google" onClick={logGoogleUser}>
          Sign in with Google
        </Button>
      </form>
      <h1>sign In Page</h1>
      <SignUpForm />
    </div>
  );
};


export default SignIn;
