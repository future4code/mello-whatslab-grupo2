import React from 'react';
import styled from 'styled-components';

// estilização dos componentes

const Header = styled.header`
background-color: #8000FF;
width: 100%;
height: 18vh;
border-radius:0px 0px 10px 10px;
`

const LogoH2 = styled.h2`
color: white;
text-align: center;
margin-top: 0;
text-shadow: 2px 2px 1px #202225;
width: 25%;
line-height: 9vh;
height: 10vh;
background-color: #7401DF;
border-radius:0px 0px 30px 10px;
`

const HeaderWhatsLab = () => {

    return (
        <Header>
            <LogoH2>WhatsLab</LogoH2>
        </Header>

    )
};

export default HeaderWhatsLab;