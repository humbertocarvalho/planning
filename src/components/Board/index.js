import React from 'react';
import Player from '../Player';

import { Container } from './styles';

export default function Board() {
  return (
    <Container>
      <ul>
        <Player name='Humberto' />
        <Player name='Matheus' />
        <Player name='Nielsen' />
        <Player name='Marcelo' />
        <Player name='Luis' />
      </ul>
    </Container>
  );
}
