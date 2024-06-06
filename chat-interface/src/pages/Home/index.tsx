import React, { useEffect, useState, useRef } from "react";
import * as uuid from "uuid";

import { FaRegUser } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { LuNetwork } from "react-icons/lu";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

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
  HowToUse,
  Developed,
  Welcome,
  Refresh,
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
        className="d-flex w-100 p-3 align-items-center justify-content-between"
        style={{
          cursor: "default",
          borderBottom: "1px solid #292727",
        }}
      >
        <Title className="text-secondary font-monospace text-uppercase">
          {title}
        </Title>

        <div className="d-flex gap-2 justify-content-end align-items-center">
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
      <Welcome className="text-secondary font-monospace mt-5">
        Welcome to the Real-time Chat
      </Welcome>
      <Content className="mb-3 d-flex flex-column align-items-center">
        <div className="input-group input-group-md m-3 w-25">
          <span
            className="input-group-text bg-dark text-success"
            style={{ cursor: "default" }}
            title="User"
          >
            <FaRegUser />
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Username..."
          />
        </div>
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
            <IoSendOutline />
          </button>
        </div>
      </Content>
      {clickRefresh === true ? (
        <></>
      ) : (
        <>
          <HowToUse className="accordion-item align-items-center p-2 rounded border border-dark font-monospace">
            <span className="text-white">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How to chat
              </button>
            </span>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <p className="text-secondary text-center">
                <span style={{ color: "#3aaf69" }}>1.</span> Type your Username
                <br />
                <span style={{ color: "#3aaf69" }}>2.</span> Type your message
                <br />
                <span style={{ color: "#3aaf69" }}>3.</span> Send it
              </p>
              <p className="text-secondary text-center">That simple! :D</p>
            </div>
          </HowToUse>
        </>
      )}
      <Footer>
        <p style={{ color: "#2a4158" }}>Developed with</p>
        <Developed className="font-monospace">
          <div className="d-flex flex-column align-items-center gap-2">
            <span className="text-primary">
              <FaReact size={20} />
            </span>
            <span className="text-info">React</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <span className="text-danger">
              <SiNestjs size={20} />
            </span>
            <span className="text-danger">NestJS</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <span className="text-info">
              <LuNetwork size={20} />
            </span>
            <span style={{ color: "#9ac0f8" }}>WebSockets</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <span className="text-primary">
              <SiTypescript size={20} />
            </span>
            <span className="text-primary">TypeScript</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <span style={{ color: "#820AFA" }}>
              <FaBootstrap size={20} />
            </span>
            <span style={{ color: "#820AFA" }}>Bootstrap</span>
          </div>
        </Developed>
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
      {clickRefresh === true ? <Refresh>{refreshMsg}</Refresh> : <></>}
    </Container>
  );
};

export default Home;
