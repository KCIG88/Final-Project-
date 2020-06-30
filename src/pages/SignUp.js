import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import API from "../utils/API.js";
// import { authenticate, isAuthenticated } from "../utils/auth.js";
import AuthForm from "../components/AuthForm";
import AuthInputField from "../components/AuthForm/AuthInputField";
import SubmitBtn from "../components/Form/SubmitBtn";
// import HelpText from "../components/Form/HelpText";
import LinkBtn from "../components/LinkBtn";
import { register } from "../components/UserFunctons/UserFunctions"

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      userName: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName,
    }
    register(user).then(res => {
      if (res) {
        this.props.history.push('/login')
      }
    }).catch(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <>
        <AuthForm title="SIGN UP">
          <AuthInputField
            name="email"
            label="Email Address:"
            type="email"
            placeholder="Email"
            onChange={this.onChange}
            value={this.state.email}
            icon="fas fa-envelope"
          />
          <AuthInputField
            name="password"
            label="Password:"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            value={this.state.password}
            icon="fas fa-lock"
          />
          <AuthInputField
            name="username"
            label="Username:"
            type="username"
            placeholder="Username"
            onChange={this.onChange}
            value={this.state.userName}
            icon="fas fa-lock"
          />
          <SubmitBtn onSubmit={this.onSubmit}>SUBMIT</SubmitBtn>
          <LinkBtn route="/signIn">CREATE AN ACCOUNT</LinkBtn>
        </AuthForm>
        {/* {redirectUser()} */}
      </>






    );
  }
}


export default SignUp;
