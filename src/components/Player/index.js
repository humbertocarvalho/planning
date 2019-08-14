import React from 'react';

import { Container, Card } from './styles';

export default function Player({ name, hours }) {
  return (
    <Container>
      <Card>
        <img
          src='https://vignette.wikia.nocookie.net/yugioh/images/8/8f/ExodiatheForbiddenOne-LART-EN-UR-LE.png/revision/latest?cb=20190701182802'
          alt=''
        />
        <p>{hours}</p>
        <h1>{name}</h1>
      </Card>
    </Container>
  );
}
