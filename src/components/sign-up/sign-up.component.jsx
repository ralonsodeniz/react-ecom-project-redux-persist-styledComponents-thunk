import React, { Component } from "react";

import FormInput from "..//form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { SignUpContainer, SignUpTitleContainer } from "./sign-up.styles";
// import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault(); // with this method we prevent the default behaviour of the element to have full control of it
    // next step is to mimic what we did in App.js when the google auth happens
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      ); // this method that comes with firebase.auth creates a new user account in the firebase auth service using an email and a password and signs it to the application. we store the user that is returned from the method
      await createUserProfileDocument(user, { displayName }); // we pass displayName inside an object since inside of createUserProfileDocument() the second parameter is an object spread operator and since the displayName is not going to be in the user object that is returned from createUserWithEmailAndPassord we have to pass it as the additionalData
      this.setState({
        // we await for the user to be created and after that we clean the state so its ready to create a new user
        // whis will also clear our form
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    // here we do the same as in the sign in component, we get the name of the input that is changing and the value of the change and we setState the property usign the indirect object property selector [name] with the value
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitleContainer>I do not have an account</SignUpTitleContainer>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
