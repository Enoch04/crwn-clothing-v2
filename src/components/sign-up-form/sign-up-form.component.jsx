import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassowrd: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    // We destructure the values of formFields so after the state changes we can assing the value of our FormInput field to defaultFormFields to have the same value
    const { displayName, email, password, confirmPassowrd } = formFields;

    // resets the values of defaultFormFields by re-assignin them back to what their intial state was which was empty values
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // handleSubmit starts the proccess of authenticate and creating a new user whenthe user summits their info
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.target;

        if (password !== confirmPassowrd) {
            alert("Passsword do not match");
            return;
        }
        // We used try-catch to implement the functions from our firebase.utils.js to create and authenticate a user when the form gets submitted
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.log('user creation encountered and error', error)
        }

    }

    // handleChange is the the event handler for onChange of the FormInput field this sets the values of our defaultFormFields,
    // targeting the specific key in our object and only changing that key 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div>
            <h1>Sign up form</h1>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassowrd" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;