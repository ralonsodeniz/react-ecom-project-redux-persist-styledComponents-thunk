import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"; // we import the siginwithgoogle method from the firebase utils file

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer
} from "./sign-in.styles";
// import "./sign-in.styles.scss";

class SignIn extends Component {
  // here we use a class component because it is going to hanbdle its own state for the sign in process
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault(); // this prevents the default submit action from firing because we want full control over exactly what this submit is going to do
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password); // this auth method verifies if the email and password are in the auth system in firebase
      this.setState({ email: "", password: "" }); // if the auth succeed we clear the state for the next user to sign in
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }); // remember that to select an Object property using the value of a variable we need to wrap the variable in brackets []
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit">sign in</CustomButton>
            {/* we create a new button to sign in using google auth */}
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
