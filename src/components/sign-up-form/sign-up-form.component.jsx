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
    const { displayName, email, password, confirmPassowrd} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email,password} = event.target;
        
        if(password !== confirmPassowrd) {
            alert("Passsword do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);

            const userDocRef = await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch (error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }
            console.log('user creation encounterd and error', error)
        }
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    };

    return (
        <div>
            <h1>Sign up form</h1>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
    
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type ="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type ="password" required onChange={handleChange} name="confirmPassowrd" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;