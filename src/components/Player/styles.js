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
    width: 300px;
    height: 300px;
    margin: auto;
  }

  p {
    font-size: 50px;
    align-self: flex-end;
  }

  h1 {
    align-self: flex-end;
  }
`;
