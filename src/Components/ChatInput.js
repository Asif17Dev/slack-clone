import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelId, channelName, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    setInput("");
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          placeholder={`message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button type="submit" hidden onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    display: flex;
    position: relative;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    outline: none;
    border: 1px soid lightgray;
    width: 60%;
    padding: 20px;
    border-radius: 3px;
  }

  > form > Button {
    display: none;
  }
`;
