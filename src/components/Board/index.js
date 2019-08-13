import React from 'react';
import Player from '../Player';

import { Container } from './styles';

export default function Board() {
  return (
    <Container>
      <Player name='Humberto' />
      <Player name='Matheus' />
      <Player name='Nielsen' />
      <Player name='Marcelo' />
      <Player name='Luis' />
    </Container>
  );
}
