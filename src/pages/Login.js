import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          alt=""
          src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
        />
        <h1>Sign in the Clone Slack</h1>
        <p>clone.slack.com</p>
        <Button type="submit" onClick={signIn}>
          SignIn With Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > Button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: var(--slack-color);
    color: #fff;
    transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    :hover {
      background-color: var(--slack-color);
      opacity: 0.9;
    }
  }
`;
