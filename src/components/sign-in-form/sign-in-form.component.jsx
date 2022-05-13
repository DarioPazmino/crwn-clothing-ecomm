import { useState } from "react";
import { useDispatch } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { SignUpContainer, Title, ButtonsContainer } from './sign-in-form-styles.jsx'
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultformFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch(error.code) {
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
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  }

  return (
    <SignUpContainer>
    <Title>Already have an account?</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>        
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;