import React from 'react';
import Player from '../Player';

import { Container } from './styles';

export default function Board() {
  return (
    <Container>
      <Player name='Humberto' hours={5} />
      <Player name='Matheus' hours={10} />
      <Player name='Nielsen' hours={15} />
      <Player name='Marcelo' hours={20} />
      <Player name='Luis' hours={5} />
    </Container>
  );
}
