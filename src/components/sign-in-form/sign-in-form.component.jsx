<<<<<<< HEAD
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
=======
import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { UserContext } from '../../contexts/user.context';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
>>>>>>> origin/lesson-10
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

<<<<<<< HEAD
=======
  const { setCurrentUser } = useContext(UserContext);

>>>>>>> origin/lesson-10
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
<<<<<<< HEAD
    await createUserDocumentFromAuth(user);
=======
    setCurrentUser(user);
>>>>>>> origin/lesson-10
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
<<<<<<< HEAD
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
=======
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setCurrentUser(user);
>>>>>>> origin/lesson-10
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
<<<<<<< HEAD
    <div className='sign-up-container'>
=======
    <div className='sign-in-container'>
>>>>>>> origin/lesson-10
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
<<<<<<< HEAD
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
=======
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
>>>>>>> origin/lesson-10
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
