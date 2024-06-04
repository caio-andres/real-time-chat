import styled from "styled-components";

export const Container = styled.div``;

export const Top = styled.div``;

export const Title = styled.h1``;

export const Content = styled.div``;

export const Card = styled.div``;

export const MyMessage = styled.li`
  padding: 8px;
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
