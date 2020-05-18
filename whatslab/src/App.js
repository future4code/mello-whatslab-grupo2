import React from 'react';
import Messenger from './components/Messenger';
import HeaderWhatsLab from './components/HeaderWhatsLab';
import styled from 'styled-components';

// estilização do componente Container

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #eedeab;
width:100%;
height:80vh;
margin: 0;
padding:0;
font-family: Verdana;
font-size: 20px;
`

function App() {
  return (
    <Container>
      <HeaderWhatsLab />
      <Messenger />
    </Container>

  );
}

export default App;
