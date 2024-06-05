import React, { useEffect, useState, useRef } from "react";
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

  const chatRef = useRef<HTMLDivElement>(null);

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

    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight; // it scroll down the chat when the overflow-Y appears
    }
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
        className="d-flex w-100 p-3 align-items-center row"
        style={{
          cursor: "default",
          borderBottom: "1px solid #292727",
        }}
      >
        <Title className="text-secondary col-sm font-monospace text-uppercase">
          {title}
        </Title>

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
      <h3 className="text-secondary font-monospace mt-5">
        Welcome to the Real-time Chat
      </h3>

      <div className="input-group input-group-md m-3 col-sm w-25 d-flex flex-column">
        <span>User</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control w-100 rounded"
          placeholder="Type your username..."
        />
      </div>
      <Content className="mb-3 w-100 d-flex flex-column align-items-center">
        <Card ref={chatRef} className="w-25">
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
        <div className="input-group input-group-md m-3 w-25">
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
        <Welcome
          className="fs-5 text-white fw-bold p-3 rounded border border-dark"
          style={{
            backgroundColor: "#131ee30e",
          }}
        >
          {refreshMsg}
        </Welcome>
      ) : (
        <>
          <Welcome className="d-flex flex-column align-items-center w-25 p-2 rounded border border-dark font-monospace">
            <span className="text-white fs-5">How to chat</span>
            <p className="text-secondary text-center">
              <span style={{ color: "#3aaf69" }}>1.</span> Type your Username
              <br />
              <span style={{ color: "#3aaf69" }}>2.</span> Type your message
              <br />
              <span style={{ color: "#3aaf69" }}>3.</span> Send it
              <br />
              That simple! :D
            </p>
          </Welcome>
          <p className="mt-4 text-white">Developed with:</p>
          <div className="d-flex gap-3">
            <span className="text-info">React</span>
            <span className="text-danger">NestJS</span>
            <span style={{ color: "#9ac0f8" }}>WebSockets</span>
            <span className="text-primary">TypeScript</span>
            <span style={{ color: "#820AFA" }}>Bootstrap</span>
          </div>
        </>
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
