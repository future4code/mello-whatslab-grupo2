import React from 'react';
import ListMessenger from './components/ListMessenger';
import HeaderWhatsLab from './components/HeaderWhatsLab';
import MainWhatsLab from './components/MainWhatsLab';
import styled from 'styled-components';

// estilização do componente Container

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #D8D8D8;
width:100%;
height:80vh;
border: 2px solid black;
margin: 0;
padding:0;
`

function App() {
  return (
    <Container>
      <HeaderWhatsLab />
      <MainWhatsLab />
      <ListMessenger />
    </Container>

  );
}

export default App;
