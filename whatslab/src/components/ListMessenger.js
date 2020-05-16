import React from 'react';
import styled from 'styled-components';

// estlização dos componentes

const SessaoEnviodeMensangem = styled.div`
display: flex;
width: 96%;
align-content: center;
flex-direction: row;
border-radius: 15px;
justify-content:space-evenly;
background-color: #202225;
height: 12vh;
`

const InputUsuario = styled.input`
width: 12%;
border-radius: 10px;
height: 7vh;
margin-top: 5px;
`

const Button = styled.button`
width: 10%;
background-color: #8000FF;
border-radius: 10px;
height: 8vh;
margin-top: 5px;
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