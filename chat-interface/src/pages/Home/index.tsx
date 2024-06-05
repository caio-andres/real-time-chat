import React, { useEffect, useState } from "react";
import * as uuid from "uuid";

import io from "socket.io-client";

import { handleRefreshClick } from "./func/refreshClick";
import {
  Container,
  Content,
  Card,
  MyMessage,
  OtherMessage,
  Title,
  Top,
  Footer,
  Welcome,
} from "./styles";

interface Message {
  id: string;
  name: string;
  text: string;
}

interface Payload {
  name: string;
  text: string;
}

const socket = io("http://localhost:3333");

const Home: React.FC = () => {
  const [title] = useState("Real-time Chat");
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [refreshMsg, setRefreshMsg] = useState<string>("");
  const [clickRefresh, setClickRefresh] = useState<boolean>(false);

  useEffect(() => {
    function receivedMessage(message: Payload) {
      const newMessage: Message = {
        id: uuid.v4(),
        name: message.name,
        text: message.text,
      };

      setMessages([...messages, newMessage]);
    }

    socket.on("msgToClient", (message: Payload) => {
      receivedMessage(message);
    });
  }, [messages, name, text]);

  function validateInput() {
    return name.length > 0 && text.length > 0;
  }

  function sendMessage() {
    if (validateInput()) {
      const message: Payload = {
        name,
        text,
      };

      socket.emit("msgToServer", message);
      setText("");
    }
  }

  return (
    <Container className="d-flex flex-column align-items-center w-100">
      <Top
        className="d-flex justify-content-between w-100 p-3 align-items-center row"
        style={{
          cursor: "default",
          borderBottom: "1px solid #292727",
        }}
      >
        <Title className="text-secondary col-sm font-monospace text-uppercase">
          {title}
        </Title>
        <div className="input-group m-3 col-sm">
          <span
            className="input-group-text bg-dark text-white"
            style={{ cursor: "default" }}
            title="User"
          >
            User:
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Type here..."
          />
        </div>
        <div className="d-flex gap-2 col-sm justify-content-end align-items-center">
          <button className="btn btn-link">
            <img
              src="svg/refresh.svg"
              width="32"
              height="32"
              alt="Refresh"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleRefreshClick();
                setRefreshMsg("Refreshing the page...");
                setClickRefresh(true);
              }}
            />
          </button>
          <a href="https://linktr.ee/caioandres" target="_blank">
            <img
              src="images/eu-circle.png"
              width="32"
              height="32"
              alt="Profile"
              style={{ cursor: "pointer" }}
            />
          </a>
        </div>
      </Top>
      <Content className="m-5 w-100 d-flex flex-column align-items-center">
        <Card className="w-25">
          <ul className="d-flex flex-column">
            {messages.map((message) => {
              if (message.name === name) {
                return (
                  <MyMessage key={message.id}>
                    <span className="text-white" style={{ fontSize: "18px" }}>
                      {message.name}
                    </span>

                    <p>{message.text}</p>
                  </MyMessage>
                );
              }

              return (
                <OtherMessage key={message.id}>
                  <span className="text-white" style={{ fontSize: "18px" }}>
                    {message.name}
                  </span>
                  <p>{message.text}</p>
                </OtherMessage>
              );
            })}
          </ul>
        </Card>
        <div className="input-group input-group-sm m-3 w-25">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Message..."
            className="form-control"
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => sendMessage()}
          >
            Send
          </button>
        </div>
      </Content>
      {clickRefresh === true ? (
        <Welcome className="fs-5 text-white fw-bold bg-dark p-4 rounded border border-dark">
          {refreshMsg}
        </Welcome>
      ) : (
        <Welcome className="d-flex flex-column align-items-center w-25 p-4 rounded border border-dark my-2">
          <h3 className="text-white font-monospace">Welcome to the Chat!</h3>
          <p className="text-secondary text-center font-monospace">
            Write your name in the field above in the header, and then type your
            message in the field above. When you press 'Send,' your message will
            be sent to the ID you are chatting with in real time.
          </p>
          <div className="d-flex gap-3 mt-4">
            <span className="text-info font-monospace">React</span>
            <span className="text-danger font-monospace">NestJS</span>
            <span className="text-white font-monospace">WebSockets</span>
            <span className="text-primary font-monospace">TypeScript</span>
            <span style={{ color: "#820AFA" }}>Bootstrap</span>
          </div>
        </Welcome>
      )}
      <Footer>
        <p className="text-white">
          {new Date().getFullYear()} Real-time Chat{" "}
          <span className="text-secondary">&copy;</span>{" "}
          <a
            href="https://linktr.ee/caioandres"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Caio André
          </a>
        </p>
      </Footer>
    </Container>
  );
};

export default Home;
