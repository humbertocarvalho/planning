import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  margin: 5px;
  flex-grow: 1;
  background-color: #f4f4ff;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  /* TODO Verificar como fazer isso aqui ficar dinâmico
  */
  margin-top: 750px;
  height: 50px;
  h1 {
    color: black;
  }
`;
