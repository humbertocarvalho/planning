import React from 'react';

import { Container, Footer } from './styles';

export default function Player({ name }) {
  return (
    <Container>
      <Footer>
        <h1>{name}</h1>
      </Footer>
    </Container>
  );
}
