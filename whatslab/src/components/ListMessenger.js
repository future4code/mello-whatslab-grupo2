import React from 'react';
import styled from 'styled-components';

// estlização dos componentes

const InputUsuario = styled.input`
width: 12%;
border-radius: 10px;
height: 8vh;
margin-top: 2px;
`

const SessaoEnviodeMensangem = styled.div`
display: flex;
width: 96%;
align-content: center;
flex-direction: row;
border-radius: 15px;
justify-content:space-evenly;
background-color: #6E6E6E;
height: 12vh;
`

const Button = styled.button`
width: 10%;
background-color: #8000FF;
border-radius: 10px;
height: 10vh;
margin-top: 2px;
`

const InputMensagem = styled.input`
width: 70%;
border-radius: 10px;
height: 8vh;
margin-top: 2px;
`


class ListMessenger extends React.Component {
    state = {
        listMensager: [
            {
                nomeUsuario: '',
                messenger: ''
            },

            {
                nomeUsuario: '',
                messenger: ''
            }
        ]
    };

    render() {
        return (
            <SessaoEnviodeMensangem>
                <InputUsuario placeholder="Usuario"></InputUsuario>
                <InputMensagem placeholder="Mensagem"></InputMensagem>
                <Button>ENVIAR</Button>
            </SessaoEnviodeMensangem>


        )
    }

};


export default ListMessenger;