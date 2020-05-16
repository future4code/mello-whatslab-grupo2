import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
width: 100%;
height: 47vh;
`
const ConteudoMsg = styled.p`
display: inline-block;
background-color: #202225;
color: white;
margin-left: 4px;
border-radius: 5px;
`


const MainWhatsLab = () => {

    return (
        <Main>
            <ConteudoMsg>Sou o Main</ConteudoMsg>
            
        </Main>

    )
};

export default MainWhatsLab;