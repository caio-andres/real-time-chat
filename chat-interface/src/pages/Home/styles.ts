import styled from "styled-components";

export const Container = styled.div``;

export const Top = styled.header``;

export const Title = styled.h1``;

export const Content = styled.main``;

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

export const Welcome = styled.div`
  @media (max-width: 1780px) {
    width: 75%;
  }

  background-color: #131ee30e;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export const Developed = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 30px;
`;
