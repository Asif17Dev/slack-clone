import React from "react";
import styled from "styled-components";
function Message({ message, timestamp, user, userimg }) {
  return (
    <MessageContainer>
      <img src={userimg} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 {
    font-size: 16px;
  }
  > h4 > span {
    margin-left: 4px;
    font-size: 10px;
    color: lightgray;
    font-weight: 300;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
