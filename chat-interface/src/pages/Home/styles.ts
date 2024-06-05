import styled from "styled-components";

export const Container = styled.div``;

export const Top = styled.header``;

export const Title = styled.h1`
  letter-spacing: 2px;
`;

export const Welcome = styled.h3`
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: 700px) {
    width: 65%;
    text-align: center;
  }

  @media (max-width: 540px) {
    width: 50%;
    text-align: center;
  }
`;

export const Content = styled.main`
  width: 100%;

  @media (max-width: 1300px) {
    width: 150%;
  }

  @media (max-width: 960px) {
    width: 250%;
  }
`;

export const Card = styled.div`
  overflow-y: auto;
  max-height: 25vh;
`;

export const MyMessage = styled.li`
  padding: 8px;
  margin-right: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  width: 200px;

  background: #0088cc;
  color: #000000;

  border-radius: 9px;

  + li {
    margin-top: 4px;
  }
`;

export const OtherMessage = styled.li`
  padding: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 200px;

  background: #808080;
  color: #000000;

  border-radius: 9px;

  + li {
    margin-top: 4px;
  }
`;

export const HowToUse = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  background-color: #131ee30e;

  @media (max-width: 1300px) {
    width: 38%;
  }

  @media (max-width: 960px) {
    width: 63%;
  }

  @media (max-height: 699px) {
    font-size: 14px;
  }

  @media (max-height: 680px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (max-height: 480px) {
    display: none;
  }
`;

export const Developed = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 30px;

  @media (max-width: 540px) {
    font-size: 10px;
  }
`;
