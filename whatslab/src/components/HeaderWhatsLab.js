import React from 'react';
import styled from 'styled-components';

// estilização dos componentes

const Header = styled.header`
background-color: #8000FF;
width: 100%;
height: 18vh;
border-radius:0px 0px 10px 10px;
`

const HeaderWhatsLab = () => {

    return (
        <Header>
            <h2>WhatsLab</h2>
        </Header>

    )
};

export default HeaderWhatsLab;