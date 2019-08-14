import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  width: 250px;
  margin: 5px;
  flex-grow: 1;
  background-color: #f4f4ff;
`;

export const Card = styled.div`
  img {
    padding-top: 50px;
    width: 300px;
    height: 300px;
    margin: auto;
  }

  p {
    font-size: 50px;
    padding-top: 250px;
  }

  h1 {
    padding-top: 150px;
  }
`;
